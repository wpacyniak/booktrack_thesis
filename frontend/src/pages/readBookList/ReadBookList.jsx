import { useState, useEffect } from "react";
import { Wrapper, ListWrapper, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Book } from "../../components/book/Book";
import { AddButton } from "../../components/addButton/AddButton";
import { Form } from "../../components/form/Form";
import { useStore } from "../../Store";
import { ErrorModal } from "../../components/errorModal/ErrorModal";

export const ReadBookList = () => {
  const { state } = useStore();
  const type = "read";

  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    getBooks();
  }, [state.year, isOpen, isDeleted]);

  const getBooks = async () => {
    const year = state.year;
    body = { year };
    const res = await fetch("http://localhost:5000/read_books", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.status == 200) {
      const booksDb = await res.json();
      setBooks(booksDb);
    }
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  async function deleteBook(bookId) {
    const body = { bookId: bookId };
    const res = await fetch("http://localhost:5000/delete_book", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setText("Poprawnie usunięto!");
      setIsDeleted(!isDeleted);
      return;
    }
    setText("Coś poszło nie tak!");
  }

  return (
    <Wrapper>
      <Header />
      <Title>Przeczytane książki w {state.year} roku:</Title>
      <ErrorModal isOpen={isModalOpen} text={text} setIsOpen={setIsModalOpen} />
      <ListWrapper>
        {books?.length != 0 &&
          books.map((book, index) => {
            return (
              <Book
                key={index}
                book={book}
                type={type}
                deleteBook={deleteBook}
              />
            );
          })}
        <AddButton onClick={onClick} />
        <Form isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
      </ListWrapper>
      <Footer />
    </Wrapper>
  );
};
