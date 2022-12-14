import styled, { keyframes } from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  color: ${colors.violet_dark};
  border: 2px solid ${colors.violet_dark};
  border-radius: 20px;
  width: 240px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const slide = keyframes`
  from {
    left: 0
  };
  to {
    left: -100%;
  };
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  width: 200px;
  text-align: center;
`;

const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 200px;
  color: ${colors.violet_dark};
  position: relative;
  white-space: nowrap;

  &: hover {
    animation: 3s linear 0s ${slide} infinite;
  }
`;

const AuthorWrapper = styled.div`
  overflow: hidden;
  width: 200px;
  text-align: center;
`;

const Author = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 14px;
  color: ${colors.violet_dark};
  white-space: nowrap;
  position: relative;

  &: hover {
    animation: 3s linear 0s ${slide} infinite;
  }
`;

const Cover = styled.img`
  width: 200px;
  margin: 20px 0;
  max-height: 280px;
  cursor: ${(props) => props.type == "read" && "pointer"};
`;

const TextRead = styled.p`
  margin-top: 10px;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: italic;
`;

const Button = styled.button`
  background-color: ${colors.violet_dark};
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 10px;
  color: ${colors.white};
  width: 90px;
  padding: 4px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 10px;
  left: -65px;
  border-radius: 15px;
  color: ${colors.white};
  text-transform: uppercase;
  background-color: ${colors.violet_dark};
  padding: 5px 10px 5px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
    left: -10px;
    background-color: ${colors.violet_hover};
  }
`;

const EditButton = styled.div`
  position: absolute;
  top: 50px;
  left: -85px;
  border-radius: 15px;
  color: ${colors.white};
  text-transform: uppercase;
  background-color: ${colors.violet_dark};
  padding: 5px 10px 5px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
    left: -10px;
    background-color: ${colors.violet_hover};
  }
`;

const CurrentlyReadingBadge = styled.div`
  position: absolute;
  top: 10px;
  right: -155px;
  border-radius: 15px;
  color: ${colors.white};
  text-transform: uppercase;
  background-color: ${colors.violet_light};
  padding: 5px 20px 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
    right: -10px;
    background-color: ${colors.violet_light};
  }
`;

export {
  Wrapper,
  CurrentlyReadingBadge,
  Title,
  Author,
  Cover,
  TextRead,
  ButtonsWrapper,
  Button,
  DeleteButton,
  AuthorWrapper,
  EditButton,
  TitleWrapper,
};
