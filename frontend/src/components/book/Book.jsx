import {
  Wrapper,
  Cover,
  Title,
  Author,
  TextRead,
  Button,
  ButtonsWrapper,
} from "./styles";

const book = {
  name: "The Love Hypothesis",
  author: "Ali Hazelwood",
  cover:
    "https://s.lubimyczytac.pl/upload/books/5024000/5024957/998409-352x500.jpg",
  pages: 416,
  progress: 20,
  date: "20 Sep 2022",
  rate: 4,
};

const type = "plan";

export const Book = () => {
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
