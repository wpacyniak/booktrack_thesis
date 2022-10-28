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
import { useLocation } from "react-router-dom";

export const Book = () => {
  const location = useLocation();
  const book = location.state;
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
