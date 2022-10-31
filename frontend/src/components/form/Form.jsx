import Modal from "react-modal";
import { colors } from "../../resources/constants";
import {
  CloseButton,
  Title,
  Wrapper,
  Cover,
  ButtonWrapper,
  Button,
  Label,
  TextArea,
  DatePicker,
  ErrorText,
  FormWrapper,
} from "./styles";
import { Input } from "../input/Input";
import { StarPicker } from "../starPicker/StarPicker";
import { useState } from "react";
import { useStore } from "../../Store";

const modalStyles = {
  content: {
    width: "800px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "none",
    backgroundColor: colors.pink_light,
    boxShadow: `10px 10px ${colors.violet_hover}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export const Form = ({ isOpen, setIsOpen, type, bookId }) => {
  const { state } = useStore();
  Modal.setAppElement("#root");
  const [errorText, setErrorText] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [cover, setCover] = useState("");
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState("");
  const [rate, setRate] = useState(0);
  const [date, setDate] = useState("");

  function closeModal() {
    setIsOpen(!isOpen);
    setErrorText("");
  }

  function onChangeTitle(value) {
    setTitle(value);
  }
  function onChangeAuthor(value) {
    setAuthor(value);
  }
  function onChangePages(value) {
    setPages(value);
  }
  function onChangeCover(value) {
    setCover(value);
  }
  function onChangeNote(value) {
    setNote(value);
  }
  function onChangeQuote(value) {
    setQuote(value);
  }

  async function addRecord() {
    var body = {};
    if (type == "read") {
      if (
        !author ||
        !title ||
        !pages ||
        !cover ||
        !note ||
        !quote ||
        !rate ||
        !date
      ) {
        setErrorText("Wszystkie pola muszą być wypełnione!");
      }
      const id = bookId ? bookId : 0;
      body = {
        id,
        author,
        title,
        pages,
        cover,
        note,
        quote,
        rate,
        date,
        type: "read",
      };
    } else if (type == "plan") {
      if (!author || !title || !pages || !cover) {
        setErrorText("Wszystkie pola muszą być wypełnione!");
      }
      body = {
        author,
        title,
        pages,
        cover,
        type: "plan",
      };
    }
    const res = await fetch("http://localhost:5000/add_book", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      closeModal();
      return;
    }
    setErrorText("Coś poszło nie tak!");
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <Title>
        {type == "read"
          ? "Dodaj przeczytaną książkę:"
          : "Dodaj plan czytelniczy:"}
      </Title>
      <Wrapper>
        <FormWrapper>
          <Input
            label="Tytuł"
            onChange={(e) => onChangeTitle(e.target.value)}
            type="text"
          />
          <Input
            label="Autor"
            onChange={(e) => onChangeAuthor(e.target.value)}
            type="text"
          />
          <Input
            label="Liczba stron"
            onChange={(e) => onChangePages(e.target.value)}
            type="number"
          />
          <Input
            label="Okładka"
            onChange={(e) => onChangeCover(e.target.value)}
            type="text"
          />
          {type == "read" ? (
            <Input
              label="Cytat"
              onChange={(e) => onChangeQuote(e.target.value)}
              type="text"
            />
          ) : null}
        </FormWrapper>
        {type == "read" ? (
          <FormWrapper>
            <Label>Notatka</Label>
            <TextArea
              onChange={(e) => onChangeNote(e.target.value)}
              rows="6"
              placeholder="Notatka"
            />
            <Label>Ocena</Label>
            <StarPicker value={rate} setValue={setRate} />
            <Label>Data przeczytania</Label>
            <DatePicker type="date" onChange={(e) => setDate(e.target.value)} />
          </FormWrapper>
        ) : null}
        <Cover
          src={
            cover
              ? cover
              : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          alt="cover"
        />
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={addRecord}>Zapisz</Button>
        <ErrorText>{errorText}</ErrorText>
      </ButtonWrapper>
    </Modal>
  );
};
