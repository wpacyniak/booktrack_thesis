import { Wrapper } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Book } from "../../components/book/Book";

export const ReadBookList = () => {
  return (
    <Wrapper>
      <Book />
      <Footer />
    </Wrapper>
  );
};
