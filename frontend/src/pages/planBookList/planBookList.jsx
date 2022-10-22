import { Wrapper, ListWrapper, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { AddButton } from "../../components/addButton/AddButton";
import { Book } from "../../components/book/Book";

const books = [
  {
    id: 1,
    name: "The Love Hypothesis",
    author: "Ali Hazelwood",
    cover:
      "https://s.lubimyczytac.pl/upload/books/5024000/5024957/998409-352x500.jpg",
    pages: 416,
  },
  {
    id: 2,
    name: "The Spanish Love Deception",
    author: "Elena Armas",
    cover:
      "https://s.lubimyczytac.pl/upload/books/5016000/5016996/998465-352x500.jpg",
    pages: 512,
  },
  {
    id: 3,
    name: "Royal",
    author: "Sylwia Zandler",
    cover:
      "https://s.lubimyczytac.pl/upload/books/5002000/5002770/984774-352x500.jpg",
    pages: 329,
  },
  {
    id: 4,
    name: "Lore",
    author: "Alexandra Bracken",
    cover:
      "https://s.lubimyczytac.pl/upload/books/4981000/4981809/960269-352x500.jpg",
    pages: 576,
  },
  {
    id: 5,
    name: "Mesjasz Diuny",
    author: "Frank Herbert",
    cover:
      "https://s.lubimyczytac.pl/upload/books/5007000/5007137/967934-352x500.jpg",
    pages: 299,
  },
];

export const PlanBookList = () => {
  const type = "plan";
  return (
    <Wrapper>
      <Header />
      <Title>Plany czytelnicze</Title>
      <ListWrapper>
        {books?.length != 0 &&
          books.map((book, index) => {
            return <Book key={index} book={book} type={type} />;
          })}
        <AddButton />
      </ListWrapper>
      <Footer />
    </Wrapper>
  );
};