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
  const { state, dispatch } = useStore();
  const type = "read";

  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (!state.auth_token || !state.year) {
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: JSON.parse(localStorage.getItem("token")),
      });
      dispatch({
        type: "SET_YEAR",
        payload: JSON.parse(localStorage.getItem("year")),
      });
    } else {
      getBooks();
    }
  }, [state.year, isOpen, isChanged, state.auth_token]);

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
      setIsChanged(!isChanged);
      setIsModalOpen(!isModalOpen);
      return;
    }
    setText("Coś poszło nie tak!");
    setIsModalOpen(!isModalOpen);
  }

  const handleIsOpen = (value) => {
    setIsOpen(value);
    if (value == false) {
      setIsChanged(!isChanged);
    }
  };

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
                isChanged={isChanged}
                setIsChanged={setIsChanged}
              />
            );
          })}
        <AddButton onClick={onClick} />
        <Form isOpen={isOpen} setIsOpen={handleIsOpen} type={type} />
      </ListWrapper>
      <Footer />
    </Wrapper>
  );
};
