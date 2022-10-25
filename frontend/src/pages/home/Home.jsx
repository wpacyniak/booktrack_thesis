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
import { useEffect } from "react";

const user = {
  yearlyGoal: 12,
  yearlyProgress: 10,
};

const currentlyReading = {
  name: "The Love Hypothesis",
  author: "Ali Hazelwood",
  cover:
    "https://s.lubimyczytac.pl/upload/books/5024000/5024957/998409-352x500.jpg",
  pages: 416,
  progress: 20,
};

export const Home = () => {
  const [bookProgress, setBookProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useStore();

  useEffect(() => {
    setBookProgress(
      Math.round((currentlyReading.progress * 100) / currentlyReading.pages, 2)
    );
  }, []);

  console.log(isOpen);
  return (
    <Wrapper>
      <Header />
      <Welcome>Cześć, {state.user.username}!</Welcome>
      <GoalWrapper>
        <TextWrapper>
          <Goal>Twój cel na {new Date().getFullYear()} rok:</Goal>
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
            {currentlyReading.progress} / {currentlyReading.pages} stron
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
              pages={currentlyReading.progress}
              setIsOpen={setIsOpen}
            />
          </ProgressWrapper>
          <ButtonWrapper>
            <BookButton>Przeczytana</BookButton>
          </ButtonWrapper>
        </InfoWrapper>
      </BookWrapper>
      <Footer />
    </Wrapper>
  );
};
