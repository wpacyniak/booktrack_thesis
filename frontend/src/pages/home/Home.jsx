import { useState, useEffect } from "react";
import { useStore } from "../../Store";
import {
  Wrapper,
  Welcome,
  Title,
  Author,
  WrapperBar,
  Goal,
  GoalSubText,
  TextWrapper,
  ButtonWrapper,
  GoalWrapper,
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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../resources/react-circular-progress-bar-styles.css";
import { colors } from "../../resources/constants";

const user = {
  yearlyGoal: 12,
  yearlyProgress: 10,
};

export const Home = () => {
  const [bookProgress, setBookProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentlyReading, setCurrentlyReading] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useStore();

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
    }
  }, [state.user, state.token]);

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

  function handleSetProgress(valueDB) {
    if (valueDB) {
      setProgress(valueDB);
      setBookProgress(Math.round((valueDB * 100) / currentlyReading.pages, 2));
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
      handleSetProgress(data.progress);
      return;
    }
  }

  function addReadBook() {
    // JAK DOROBISZ OBECNIE CZYTANĄ KSIĄŻKĘ TO SIĘ TYM ZAJMIJ
  }

  return (
    <Wrapper>
      <Header />
      <Welcome>Cześć, {state.user?.username}!</Welcome>
      <GoalWrapper>
        <TextWrapper>
          <Goal>Cel na {new Date().getFullYear()} rok:</Goal>
          <GoalSubText>
            {user.yearlyProgress}/{user.yearlyGoal} książek
          </GoalSubText>
        </TextWrapper>
        <WrapperBar>
          <CircularProgressbar
            value={
              user.yearlyProgress > user.yearlyGoal
                ? 100
                : (user.yearlyProgress * 100) / user.yearlyGoal
            }
            text={`${Math.round(
              (user.yearlyProgress * 100) / user.yearlyGoal,
              2
            )}%`}
            styles={buildStyles({
              pathColor: colors.pink_dark,
              textColor: colors.violet_dark,
            })}
          />
        </WrapperBar>
      </GoalWrapper>
      <Text>Obecnie czytam:</Text>
      <BookWrapper>
        <Cover src={currentlyReading.cover} alt="cover" />
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
            <BookButton onClik={addReadBook}>Przeczytana</BookButton>
          </ButtonWrapper>
        </InfoWrapper>
      </BookWrapper>
      <Footer />
    </Wrapper>
  );
};
