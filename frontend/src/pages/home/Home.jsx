import { useState, useEffect } from "react";
import { useStore } from "../../Store";
import {
  Wrapper,
  Welcome,
  Title,
  Author,
  ButtonWrapper,
  ProgressBar,
  Progress,
  ProgressText,
  BookWrapper,
  InfoWrapper,
  ProgressWrapper,
  BookButton,
  Pages,
  Text,
  Cover,
} from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ModalPages } from "../../components/modalPages/ModalPages";
import { GoalsList } from "../../components/goalsList/GoalsList";
import { Form } from "../../components/form/Form";

export const Home = () => {
  const [bookProgress, setBookProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentlyReading, setCurrentlyReading] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useStore();
  const [goals, setGoals] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);

  useEffect(() => {
    if (!state.user || !state.auth_token) {
      dispatch({
        type: "SET_USER",
        payload: JSON.parse(localStorage.getItem("user")),
      });
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: JSON.parse(localStorage.getItem("token")),
      });
    } else {
      getYearsList();
      getCurrentlyReading();
      getGoals();
    }
  }, [state.user, state.token, isChanged]);

  async function getYearsList() {
    const res = await fetch("http://localhost:5000/get_years", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status === 200) {
      const years = await res.json();
      dispatch({ type: "SET_YEARS_LIST", payload: years });
      localStorage.setItem("years_list", JSON.stringify(years));
      return;
    }
    const value = new Date().getFullYear();
    dispatch({ type: "SET_YEARS_LIST", payload: [value] });
    localStorage.setItem("years_list", JSON.stringify([value]));
  }

  function handleSetProgress(valueDB, pages) {
    if (valueDB && pages) {
      setProgress(valueDB);
      setBookProgress(Math.round((valueDB * 100) / pages, 2));
    } else {
      setProgress(0);
    }
  }

  async function getCurrentlyReading() {
    const res = await fetch("http://localhost:5000/get_currently_reading", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status === 200) {
      const data = await res.json();
      setCurrentlyReading(data.book);
      localStorage.setItem("currently_reading", JSON.stringify(data.book.id));
      handleSetProgress(data.progress, data.book.pages);
      return;
    }
  }

  async function getGoals() {
    const res = await fetch("http://localhost:5000/get_goals", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status === 200) {
      const data = await res.json();
      setGoals(data);
      return;
    }
  }

  function addReadBook() {
    setIsReadModalOpen(!isReadModalOpen);
  }

  function handleSetIsReadModalOpen(value) {
    setIsReadModalOpen(value);
    setCurrentlyReading();
    localStorage.removeItem("currently_reading");
  }

  return (
    <Wrapper>
      <Header />
      <Welcome>Cześć, {state.user?.username}!</Welcome>
      <GoalsList
        goals={goals}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
      {currentlyReading ? (
        <>
          <Text>Obecnie czytam:</Text>
          <BookWrapper>
            <Cover
              src={
                currentlyReading.cover
                  ? currentlyReading.cover
                  : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              alt="cover"
            />
            <InfoWrapper>
              <Title>{currentlyReading.name}</Title>
              <Author>{currentlyReading.author}</Author>
              <Pages>
                {progress} / {currentlyReading.pages} stron
              </Pages>
              <ProgressWrapper>
                <ProgressBar>
                  <Progress width={bookProgress}>
                    <ProgressText>{bookProgress}%</ProgressText>
                  </Progress>
                </ProgressBar>
                <BookButton onClick={() => setIsOpen(!isOpen)}>
                  Dodaj strony
                </BookButton>
                <ModalPages
                  isOpen={isOpen}
                  progress={progress}
                  pages={currentlyReading.pages}
                  setProgress={handleSetProgress}
                  setIsOpen={setIsOpen}
                />
              </ProgressWrapper>
              <ButtonWrapper>
                <BookButton onClick={addReadBook}>Przeczytana</BookButton>
              </ButtonWrapper>
              <Form
                isOpen={isReadModalOpen}
                setIsOpen={handleSetIsReadModalOpen}
                type={"updateBook"}
                book={currentlyReading}
              />
            </InfoWrapper>
          </BookWrapper>
        </>
      ) : (
        <>
          <Text>Obecnie nic nie czytam...</Text>
          <Welcome>
            Aby dodać obecnie czytaną książkę, przejdź do listy planów
            czytelniczych!
          </Welcome>
        </>
      )}
      <Footer />
    </Wrapper>
  );
};
