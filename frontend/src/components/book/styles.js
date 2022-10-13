import styled from "styled-components";
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
`;

// If the title too long mooooove to show full on focus
const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 200px;
  color: ${colors.violet_dark};
`;

const Author = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 14px;
  color: ${colors.violet_dark};
`;

const Cover = styled.img`
  width: 200px;
  margin: 20px 0;
`;

const TextRead = styled.p`
  margin-top: 10px;
  font-family: "DM Sans";
  font-size: 
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

export { Wrapper, Title, Author, Cover, TextRead, ButtonsWrapper, Button };
