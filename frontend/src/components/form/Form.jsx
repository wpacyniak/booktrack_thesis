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
import { useState, useEffect } from "react";
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

export const Form = ({ isOpen, setIsOpen, type, book }) => {
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
  const [text, setText] = useState("");

  useEffect(() => {
    if (type == "read") {
      setText("Dodaj przeczytaną książkę:");
    } else if (type == "updateBook") {
      setText("Edytuj przeczytaną książkę:");
    } else if (type == "updatePlan") {
      setText("Edytuj plan czytelniczy:");
    } else if (type == "plan") {
      setText("Dodaj plan czytelniczy:");
    }
    if (book) {
      if (book.author) {
        setAuthor(book.author);
      }
      if (book.title) {
        setTitle(book.title);
      }
      if (book.pages) {
        setPages(book.pages);
      }
      if (book.cover) {
        setCover(book.cover);
      }
      if (book.note) {
        setNote(book.note);
      }
      if (book.quote) {
        setQuote(book.quote);
      }
      if (book.rate) {
        setRate(book.rate);
      }
      if (book.readDate) {
        setDate(getDate(book.readDate));
      }
    }
  }, []);

  function getDate(value) {
    newDate = new Date(value);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return (
      year +
      "-" +
      month.toString().padStart(2, "0") +
      "-" +
      day.toString().padStart(2, "0")
    );
  }

  function closeModal() {
    setIsOpen(!isOpen);
    setErrorText("");
    setAuthor("");
    setTitle("");
    setPages(0);
    setCover("");
    setNote("");
    setQuote("");
    setRate(0);
    setDate("");
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
    if (type == "read" || type == "updateBook") {
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
      const id = book?.id ? book.id : 0;
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
        type: type,
      };
    } else if (type == "plan" || type == "updatePlan") {
      if (!author || !title || !pages || !cover) {
        setErrorText("Wszystkie pola muszą być wypełnione!");
      }
      const id = book?.id ? book.id : 0;
      body = {
        id,
        author,
        title,
        pages,
        cover,
        type: type,
      };
    }
    console.log(body);
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
      <Title>{text}</Title>
      <Wrapper>
        <FormWrapper>
          <Input
            label="Tytuł"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            type="text"
          />
          <Input
            label="Autor"
            value={author}
            onChange={(e) => onChangeAuthor(e.target.value)}
            type="text"
          />
          <Input
            label="Liczba stron"
            value={pages}
            onChange={(e) => onChangePages(e.target.value)}
            type="number"
          />
          <Input
            label="Okładka"
            value={cover}
            onChange={(e) => onChangeCover(e.target.value)}
            type="text"
          />
          {type == "read" ? (
            <Input
              label="Cytat"
              value={quote}
              onChange={(e) => onChangeQuote(e.target.value)}
              type="text"
            />
          ) : null}
        </FormWrapper>
        {type == "read" || type == "updateBook" ? (
          <FormWrapper>
            <Label>Notatka</Label>
            <TextArea
              onChange={(e) => onChangeNote(e.target.value)}
              rows="6"
              placeholder="Notatka"
              value={note}
            />
            <Label>Ocena</Label>
            <StarPicker value={rate} setValue={setRate} />
            <Label>Data przeczytania</Label>
            <DatePicker
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
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
