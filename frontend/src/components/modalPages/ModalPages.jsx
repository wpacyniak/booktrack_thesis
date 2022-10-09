import Modal from "react-modal";
import { colors } from "../../resources/constants";
import { CloseButton, Text, Input, Button, Wrapper } from "./styles";

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

export const ModalPages = ({ isOpen, pages, setIsOpen }) => {
  Modal.setAppElement("#root");

  function closeModal() {
    setIsOpen(!isOpen);
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <Text>Ilość przeczytanych stron:</Text>
      <Wrapper>
        <Input placeholder={pages} />
        <Button>Zapisz</Button>
      </Wrapper>
    </Modal>
  );
};
