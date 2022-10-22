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
  top: 20px;
  right: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_hover};
  }
`;

const Text = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: ${colors.violet_dark};
`;

export { CloseButton, Text };
