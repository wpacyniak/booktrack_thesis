import Modal from "react-modal";
import { useStore } from "../../Store";
import { colors } from "../../resources/constants";
import { CloseButton, Text, Input, Button, ErrorText, Wrapper } from "./styles";
import { useState } from "react";
import { API_HOST } from "../../config";

const modalStyles = {
  content: {
    width: "400px",
    height: "300px",
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

export const ModalPages = ({
  isOpen,
  progress,
  setIsOpen,
  setProgress,
  pages,
}) => {
  const [value, setValue] = useState();
  const [errorText, setErrorText] = useState("");
  const { state } = useStore();
  Modal.setAppElement("#root");

  function closeModal() {
    setIsOpen(!isOpen);
    setErrorText("");
  }

  async function handleChange() {
    if (!value) {
      setErrorText("Pole musi być uzupełnione!");
      return;
    } else if (value > pages) {
      setErrorText("Wartość jest większa niż liczba stron!");
      return;
    } else {
      const res = await fetch(`${API_HOST}/save_progress`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth_token}`,
        },
        method: "PUT",
        body: JSON.stringify(value),
      });

      if (res.status === 200) {
        setProgress(value, pages);
        setIsOpen(!isOpen);
        return;
      }
      setErrorText("Nie udało się zapisać postępu!");
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <Text>Ilość przeczytanych stron:</Text>
      <Wrapper>
        <Input
          placeholder={progress}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleChange}>Zapisz</Button>
        <ErrorText>{errorText}</ErrorText>
      </Wrapper>
    </Modal>
  );
};
