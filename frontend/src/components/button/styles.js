import styled from "styled-components";
import { colors } from "../../resources/constants";

export const Wrapper = styled.button`
  color: ${colors.violet_dark};
  background-color: transparent;
  border: none;
  min-width: 60px;
  cursor: pointer;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;

  &:hover {
    color: ${colors.violet_hover};
  }
`;
