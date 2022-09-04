import styled, { css } from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
`;

const Subtitle = styled.h3``;

const TextWrapper = styled.div`
  color: ${colors.violet_dark};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  background-color: ${colors.violet_dark};
  color: ${colors.white};

  &:hover: {
    background-color: ${colors.violet_hover};
  }
`;

const ImageLamp = styled.img`
  position: absolute;
  bottom: 10vh;
  right: 8vw;
  height: 200px;
`;

const ImageBooks = styled.img`
  position: absolute;
  bottom: 10vh;
  left: 8vw;
  height: 200px;
`;

const Footer = styled.div`
  position: absolute;
  background-color: ${colors.violet_dark};
  width: 100%;
  height: 10vh;
  bottom: 0;
`;

export {
  Wrapper,
  Title,
  Subtitle,
  TextWrapper,
  Button,
  ButtonWrapper,
  ImageBooks,
  ImageLamp,
  Footer,
};
