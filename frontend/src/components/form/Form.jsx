import Modal from "react-modal";
import { colors } from "../../resources/constants";
import {
  CloseButton,
  Title,
  Wrapper,
  Cover,
  Button,
  Label,
  TextArea,
  FormWrapper,
} from "./styles";
import { Input } from "../input/Input";
import { StarPicker } from "../starPicker/StarPicker";
import { useState } from "react";

const modalStyles = {
  content: {
    width: "800px",
    height: "600px",
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
  },
};

const types = ["plan", "read", "planToRead"];

export const Form = ({ isOpen, setIsOpen, type }) => {
  Modal.setAppElement("#root");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [cover, setCover] = useState("");
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState("");
  const [rate, setRate] = useState(0);

  function closeModal() {
    setIsOpen(!isOpen);
  }

  function onChangeTitle(value) {
    console.log("title");
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
    console.log(value);
  }
  function onChangeNote(value) {
    setNote(value);
  }
  function onChangeQuote(value) {
    setQuote(value);
  }
  function onChangeRate(value) {
    setRate(value);
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
              rows="5"
              placeholder="Notatka"
            />
            <Label>Ocena</Label>
            <StarPicker value={rate} setValue={setRate} />
            {/* datepicker + rate*/}
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
      <Button>Zapisz</Button>
    </Modal>
  );
};
