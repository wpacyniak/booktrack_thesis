import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div``;

const Title = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
`;

const Subtitle = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 40px;
`;

const TextWrapper = styled.div`
  margin-top: 19vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.violet_dark};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  margin-top: 7vh;
`;

const Button = styled.button`
  background-color: ${colors.violet_dark};
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 30px;
  color: ${colors.white};
  width: 280px;
  height: 70px;
  border: none;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

export { Wrapper, Title, Subtitle, TextWrapper, Button, ButtonWrapper };
