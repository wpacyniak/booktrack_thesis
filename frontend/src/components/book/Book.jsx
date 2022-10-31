import { useState } from "react";
import {
  Wrapper,
  Cover,
  Title,
  Author,
  TextRead,
  Button,
  ButtonsWrapper,
} from "./styles";
import { Form } from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

export const Book = ({ book, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    if (type === "read") {
      navigate("/book", { state: book });
    }
  }

  function handleReadButton() {
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper onClick={handleClick}>
      <Cover src={book.cover} alt="cover" />
      <Title>{book.name}</Title>
      <Author>
        {type === "plan" ? `${book.author} | ${book.pages} stron` : book.author}{" "}
      </Author>
      {type === "read" && (
        <TextRead>
          <span>
            {" "}
            {book.readDate} | {book.rate}{" "}
            <FaRegStar style={{ color: "#2e2562", fontSize: "16px" }} />
          </span>
        </TextRead>
      )}
      {type === "plan" && (
        <ButtonsWrapper>
          <Button onClick={handleReadButton}>Przeczytane</Button>
          <Button>Obecnie czytam</Button>
          <Form isOpen={isOpen} setIsOpen={setIsOpen} type="read" book={book} />
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};
