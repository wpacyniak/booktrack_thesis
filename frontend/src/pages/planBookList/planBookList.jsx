import { useState, useEffect } from "react";
import { Wrapper, ListWrapper, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { AddButton } from "../../components/addButton/AddButton";
import { Book } from "../../components/book/Book";
import { Form } from "../../components/form/Form";
import { useStore } from "../../Store";

export const PlanBookList = () => {
  const type = "plan";
  const { state } = useStore();

  const [plans, setPlans] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getBookPlans();
  }, [isOpen]);

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

  return (
    <Wrapper>
      <Header />
      <Title>Plany czytelnicze</Title>
      <ListWrapper>
        {plans?.length != 0 &&
          plans.map((book, index) => {
            return <Book key={index} book={book} type={type} />;
          })}
        <AddButton onClick={onClick} />
        <Form isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
      </ListWrapper>
      <Footer />
    </Wrapper>
  );
};
