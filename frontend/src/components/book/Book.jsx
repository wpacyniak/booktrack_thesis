import { useState, useEffect } from "react";
import {
  Wrapper,
  Cover,
  Title,
  Author,
  TextRead,
  Button,
  TitleWrapper,
  DeleteButton,
  EditButton,
  ButtonsWrapper,
  AuthorWrapper,
  CurrentlyReadingBadge,
} from "./styles";
import { Form } from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useStore } from "../../Store";
import { FiEdit } from "react-icons/fi";
import { GiBookmarklet } from "react-icons/gi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { API_HOST } from "../../config";

export const Book = ({ book, type, deleteBook, isChanged, setIsChanged }) => {
  const { state } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [currentlyReading, setCurrentlyReading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentlyReading(JSON.parse(localStorage.getItem("currently_reading")));
  }, [isChanged]);

  function handleClick() {
    if (type === "read") {
      navigate("/book", { state: book });
    }
  }

  function handleReadButton() {
    setIsOpen(!isOpen);
  }

  function handleSetIsModalOpen(value) {
    setIsModalEditOpen(value);
    if (value === false) {
      setIsChanged(!isChanged);
    }
  }

  async function handleCurrentlyReading() {
    const id = book.id;
    const res = await fetch(`${API_HOST}/add_currently_reading`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "PUT",
      body: JSON.stringify(id),
    });

    if (res.status === 200) {
      setIsChanged(!isChanged);
      localStorage.setItem("currently_reading", JSON.stringify(book.id));
      return;
    }
    console.log("Nie udało się dodać obecnie czytanej książki!");
  }

  return (
    <Wrapper>
      <DeleteButton onClick={() => deleteBook(book.id)}>
        Usuń <RiDeleteBin7Line />
      </DeleteButton>
      <EditButton onClick={() => setIsModalEditOpen(!isModalEditOpen)}>
        Edytuj <FiEdit />
      </EditButton>
      {currentlyReading == book.id && (
        <CurrentlyReadingBadge>
          <GiBookmarklet /> Teraz Czytam
        </CurrentlyReadingBadge>
      )}
      <Cover src={book.cover} alt="cover" type={type} onClick={handleClick} />
      <TitleWrapper>
        <Title>{book.title}</Title>
      </TitleWrapper>
      <AuthorWrapper>
        <Author>
          {type === "plan"
            ? `${book.author} | ${book.pages} stron`
            : book.author}{" "}
        </Author>
      </AuthorWrapper>
      {type === "read" && (
        <TextRead>
          <span>
            {book.readDate} | {book.rate}{" "}
            <FaRegStar style={{ color: "#2e2562", fontSize: "16px" }} />
          </span>
        </TextRead>
      )}
      {type === "plan" && (
        <ButtonsWrapper>
          <Button onClick={handleReadButton}>Przeczytane</Button>
          <Button onClick={handleCurrentlyReading}>Obecnie czytam</Button>
          <Form isOpen={isOpen} setIsOpen={setIsOpen} type="read" book={book} />
        </ButtonsWrapper>
      )}
      <Form
        isOpen={isModalEditOpen}
        setIsOpen={handleSetIsModalOpen}
        type={type == "read" ? "updateBook" : "updatePlan"}
        book={book}
      />
    </Wrapper>
  );
};
