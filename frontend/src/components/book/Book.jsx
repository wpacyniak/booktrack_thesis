import {
  Wrapper,
  Cover,
  Title,
  Author,
  TextRead,
  Button,
  ButtonsWrapper,
} from "./styles";

export const Book = ({ book, type }) => {
  return (
    <Wrapper>
      <Cover src={book.cover} alt="cover" />
      <Title>{book.name}</Title>
      <Author>
        {type === "plan" ? `${book.author} | ${book.pages} stron` : book.author}{" "}
      </Author>
      {type === "read" && (
        <TextRead>
          {book.date} | {book.rate} {/* here star icon */}
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
