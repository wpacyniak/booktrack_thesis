import { useState, useEffect } from "react";
import { Wrapper, ListWrapper, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { AddButton } from "../../components/addButton/AddButton";
import { Book } from "../../components/book/Book";
import { Form } from "../../components/form/Form";
import { useStore } from "../../Store";
import { ErrorModal } from "../../components/errorModal/ErrorModal";

export const PlanBookList = () => {
  const type = "plan";
  const { dispatch, state } = useStore();

  const [plans, setPlans] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (state.auth_token) {
      getBookPlans();
    } else {
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: JSON.parse(localStorage.getItem("token")),
      });
    }
  }, [isOpen, isChanged, state.auth_token]);

  const getBookPlans = async () => {
    const res = await fetch("http://localhost:5000/book_plans", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status == 200) {
      const plansDb = await res.json();
      setPlans(plansDb);
    }
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const handleIsOpen = (value) => {
    setIsOpen(value);
    setIsChanged(!isChanged);
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

  return (
    <Wrapper>
      <Header />
      <Title>Plany czytelnicze</Title>
      <ErrorModal isOpen={isModalOpen} text={text} setIsOpen={setIsModalOpen} />
      <ListWrapper>
        {plans?.length != 0 &&
          plans.map((book, index) => {
            return (
              <Book
                key={index}
                book={book}
                type={type}
                deleteBook={deleteBook}
                isChanged={isChanged}
                setIsChanged={handleIsOpen}
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
