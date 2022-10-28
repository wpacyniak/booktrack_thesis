import { useState, useEffect } from "react";
import { Wrapper, ListWrapper, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Book } from "../../components/book/Book";
import { AddButton } from "../../components/addButton/AddButton";
import { useStore } from "../../Store";

export const ReadBookList = () => {
  const { state } = useStore();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const year = state.year;
    const userId = state.user.id;
    body = { year, userId };
    const res = await fetch("http://localhost:5000/read_books", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log(res);

    if (res.status == 200) {
      const booksDb = await res.json();
      console.log(booksDb);
      setBooks(booksDb);
    }
  };

  const type = "read";
  return (
    <Wrapper>
      <Header />
      <Title>Przeczytane książki:</Title>
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
