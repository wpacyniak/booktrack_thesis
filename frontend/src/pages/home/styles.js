import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 52vw;
  height: 100vh;
  background-color: ${colors.white};
  color: ${colors.violet_dark};
  //   overflow-y: scroll; TODO:ogarnij scroll
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 4vw;
`;

const GoalWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6vw;
  margin-top: 3vh;
`;

const TextWrapper = styled.div`
  margin-top: 5vh;
  text-align: center;
`;

const Welcome = styled.h1`
  margin-top: 2vh;
  text-align: center;
  font-weight: 400;
  font-family: "DM Sans";
  font-style: normal;
`;

const Goal = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 26px;
  text-transform: uppercase;
`;

const GoalSubText = styled.h3`
  margin-top: 2vh;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
`;

const WrapperBar = styled.div`
  width: 9vw;
  height: 9vh;
`;

const Text = styled.h2`
  margin-top: 6vh;
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 26px;
  text-transform: uppercase;
`;

const Cover = styled.img`
  width: 12vw;
`;

const BookWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  gap: 2vw;
`;

const InfoWrapper = styled.div``;

const Title = styled.h4`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 26px;
`;

const Author = styled.h3`
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  position: relative;
  margin-top: 3vh;
  height: 30px;
  background-color: ${colors.gray};
  border-radius: 10px;
  margin: 50;
`;
const Progress = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${colors.pink_dark};
  border-radius: 10px 0px 0px 10px;
`;
const ProgressText = styled.h4`
  position: absolute;
  right: 0;
  padding: 5px;
  font-weight: bold;
`;

export {
  Wrapper,
  Header,
  Logo,
  ButtonsWrapper,
  Title,
  Welcome,
  WrapperBar,
  Goal,
  Text,
  ProgressBar,
  Progress,
  ProgressText,
  InfoWrapper,
  BookWrapper,
  GoalSubText,
  TextWrapper,
  GoalWrapper,
  Author,
  Cover,
};
