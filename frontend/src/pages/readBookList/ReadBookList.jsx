import { useState, useEffect } from "react";
import {
  Wrapper,
  TilesWrapper,
  Title,
  ListWrapper,
  ItemList,
  Author,
  TitleBook,
  Date,
  ButtonGroup,
  Row,
  Search,
  ButtonLeft,
  ButtonRight,
  Number,
  Rate,
  HeaderItem,
} from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Book } from "../../components/book/Book";
import { AddButton } from "../../components/addButton/AddButton";
import { Form } from "../../components/form/Form";
import { useStore } from "../../Store";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import {
  AiFillStar,
  AiOutlineUnorderedList,
  AiOutlineTable,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API_HOST } from "../../config";

export const ReadBookList = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const type = "read";

  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isList, setIsList] = useState(false);

  const { search } = window.location;
  const query = new URLSearchParams(search);
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredBooks = filterBooks(books, searchQuery);

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
    var res = {};
    if (year === "all") {
      res = await fetch(`${API_HOST}/read_all_books`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth_token}`,
        },
        method: "GET",
      });
    } else {
      body = { year };
      res = await fetch(`${API_HOST}/read_books`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth_token}`,
        },
        method: "POST",
        body: JSON.stringify(body),
      });
    }
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
    const res = await fetch(`${API_HOST}/delete_book`, {
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

  function handleClickList() {
    if (isList != true) {
      setIsList(true);
    }
  }

  function handleClickTable() {
    if (isList != false) {
      setIsList(false);
    }
  }

  function filterBooks(booksList, query) {
    if (!query) {
      return booksList;
    }

    return booksList.filter((boook) => {
      const titleName = boook.title.toLowerCase();
      const authorName = boook.author.toLowerCase();
      return titleName.includes(query) || authorName.includes(query);
    });
  }

  return (
    <Wrapper>
      <Header />
      <Title>
        {state.year != "all"
          ? `Przeczytane książki w ${state.year} roku:`
          : "Wszystkie przeczytane książki:"}
      </Title>
      <ErrorModal isOpen={isModalOpen} text={text} setIsOpen={setIsModalOpen} />
      <Row>
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Szukaj..."
        />
        <ButtonGroup>
          <ButtonLeft isChosen={isList} onClick={() => handleClickList()}>
            {isList ? (
              <AiOutlineUnorderedList
                style={{ color: "#fff", fontSize: "15px" }}
              />
            ) : (
              <AiOutlineUnorderedList
                style={{ color: "#2e2562", fontSize: "15px" }}
              />
            )}
          </ButtonLeft>
          <ButtonRight isChosen={!isList} onClick={() => handleClickTable()}>
            {isList ? (
              <AiOutlineTable style={{ color: "#2e2562", fontSize: "15px" }} />
            ) : (
              <AiOutlineTable style={{ color: "#fff", fontSize: "15px" }} />
            )}
          </ButtonRight>
        </ButtonGroup>
      </Row>
      {isList ? (
        <ListWrapper>
          <thead>
            <tr>
              <HeaderItem>Lp.</HeaderItem>
              <HeaderItem>Tytuł</HeaderItem>
              <HeaderItem>Autor</HeaderItem>
              <HeaderItem>Data przeczytania</HeaderItem>
              <HeaderItem>Ocena</HeaderItem>
            </tr>
          </thead>
          <tbody>
            {filteredBooks?.length != 0 &&
              filteredBooks.map((book, index) => (
                <ItemList
                  key={index}
                  onClick={() => navigate("/book", { state: book })}
                >
                  <Number>{index + 1}.</Number>
                  <TitleBook>{book.title}</TitleBook>
                  <Author>{book.author}</Author>
                  <Date>{book.readDate}</Date>
                  <Rate>
                    {book.rate}{" "}
                    <AiFillStar
                      style={{ color: "#2e2562", fontSize: "15px" }}
                    />
                  </Rate>
                </ItemList>
              ))}
          </tbody>
        </ListWrapper>
      ) : (
        <TilesWrapper>
          {filteredBooks?.length != 0 &&
            filteredBooks.map((book, index) => {
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
        </TilesWrapper>
      )}
      <Footer />
    </Wrapper>
  );
};
