import {
  Wrapper,
  Cover,
  Title,
  Author,
  TextRead,
  Button,
  ButtonsWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Book = ({ book, type }) => {
  const navigate = useNavigate();

  function handleClick() {
    // przesylanie ID a tam fetchowanie danych po ID
    if (type === "read") {
      navigate("/book", { state: book });
    }
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
          {book.readDate} | {book.rate} {/* here star icon */}
        </TextRead>
      )}
      {type === "plan" && (
        <ButtonsWrapper>
          <Button>Przeczytane</Button>
          <Button>Obecnie czytam</Button>
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};
