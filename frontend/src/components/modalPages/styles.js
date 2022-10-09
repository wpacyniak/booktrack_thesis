import styled from "styled-components";
import { colors } from "../../resources/constants";

const CloseButton = styled.button`
  background-color: ${colors.violet_dark};
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.white};
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

const Text = styled.p`
  margin-top: 60px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: ${colors.violet_dark};
`;

const Input = styled.input`
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-family: "DM Sans";
  font-style: normal;
  padding: 0 10px;
  font-size: 20px;
  margin-top: 20px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${colors.violet_dark};
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.white};
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export { CloseButton, Text, Input, Button, Wrapper };
