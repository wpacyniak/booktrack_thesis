import {
  Wrapper,
  Title,
  SubText,
  Quote,
  NotesWrapper,
  Notes,
  Cover,
  InfoWrapper,
} from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

const book = {
  author: "Julia Quinn",
  cover:
    "https://s.lubimyczytac.pl/upload/books/4951000/4951691/866674-352x500.jpg",
  note: "Świetnie się czytało. Wciągająca, przeczytana w tydzień. Miło powrócić do czytania  książek praktycznie pochłaniając je. Dosyć duża rozbieżność od serialu, o wiele mniej wątków, ale nadal zabawna i urocza.",
  pages: 480,
  quote:
    "Now doesn’t even compare to tomorrow. And tomorrow couldn’t possibly compete with the next day. As perfect as I feel this very moment, tomorrow is going to be even better.(...) every day I’m going to love you more. I promise you that. Every day...",
  rate: 5,
  title: "Mój książę",
  read_date: "8 March 2022",
};

export const Book = () => {
  return (
    <Wrapper>
      <Header />
      <InfoWrapper>
        <Title>{book.title}</Title>
        <SubText>
          {book.author} | {book.pages} stron | {book.read_date} | {book.rate}
        </SubText>
        {book.quote && <Quote>"{book.quote}"</Quote>}
      </InfoWrapper>
      <Footer />
      <NotesWrapper>
        <Cover src={book.cover} alt="cover" />
        <Notes>{book.note}</Notes>
      </NotesWrapper>
    </Wrapper>
  );
};
