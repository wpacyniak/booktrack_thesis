import {
  Wrapper,
  Header,
  Logo,
  ButtonsWrapper,
  Welcome,
  Title,
  Author,
  WrapperBar,
  Goal,
  Text,
  Cover,
} from "./styles";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/button/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../resources/react-circular-progress-bar-styles.css";
import { colors } from "../../resources/constants";

const user = {
  username: "brownieBarbie",
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
  return (
    <Wrapper>
      <Header>
        <Logo src={require("../../resources/images/logo.png")} alt="logo" />
        <ButtonsWrapper>
          <Button onClick={() => console.log("click")}>Profil</Button>
          <Button onClick={() => console.log("click")}>Lista</Button>
          <Button onClick={() => console.log("click")}>WishList</Button>
          <Button onClick={() => console.log("click")}>Plany</Button>
        </ButtonsWrapper>
      </Header>
      <Welcome>Cześć, {user.username}!</Welcome>
      <Goal>Cel {new Date().getFullYear()}</Goal>
      <Goal>
        {user.yearlyProgress}/{user.yearlyGoal}
      </Goal>
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
      <Text>Obecnie czytam:</Text>
      <Cover src={currentlyReading.cover} alt="cover" />
      <Title>{currentlyReading.name}</Title>
      <Author>{currentlyReading.author}</Author>
      {/* progress bar with how many pages */}
      {/* Button do dodania stron */}
      {/* Button do oznaczenia jako przeczytane */}
      <Footer />
    </Wrapper>
  );
};
