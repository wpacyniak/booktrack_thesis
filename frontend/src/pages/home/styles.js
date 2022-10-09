import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 100vh;
  background-color: ${colors.white};
  color: ${colors.violet_dark};
`;

const GoalWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 20px;
`;

const TextWrapper = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const Welcome = styled.h1`
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
  margin-top: 20px;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
`;

const WrapperBar = styled.div`
  width: 200px;
`;

const Text = styled.h2`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 26px;
  text-transform: uppercase;
`;

const Cover = styled.img`
  width: 250px;
  margin-left: 40px;
`;

const BookWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InfoWrapper = styled.div`
  margin-left: 60px;
  margin-top: 40px;
`;

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
  margin-top: 5px;
  height: 30px;
  background-color: ${colors.gray};
  border-radius: 15px;
  width: 500px;
`;
const Progress = styled.div`
  height: 30px;
  width: ${(props) => `${props.width * 5}px`};
  background-color: ${colors.pink_dark};
  border-radius: 15px 0px 0px 15px;
`;
const ProgressText = styled.h4`
  position: absolute;
  right: 0;
  padding: 5px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
`;

const Pages = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 20px;
  margin-top: 20px;
`;

const ProgressWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-content: center;
`;

const BookButton = styled.button`
  background-color: ${colors.violet_dark};
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 18px;
  color: ${colors.white};
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 18px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export {
  Wrapper,
  ProgressWrapper,
  BookButton,
  ButtonWrapper,
  Pages,
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
