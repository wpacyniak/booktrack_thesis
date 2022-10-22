import styled from "styled-components";
import { colors } from "../../resources/constants";

export const Wrapper = styled.button`
  color: ${colors.violet_dark};
  border: 2px solid ${colors.violet_dark};
  border-radius: 20px;
  width: 240px;
  height: 410px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  background-color: transparent;
  font-size: 80px;

  &:hover {
    background-color: ${colors.violet_dark};
    color: ${colors.white};
    cursor: pointer;
  }
`;
