import styled from "styled-components";
import { colors } from "../../resources/constants";

const Label = styled.h4`
  margin-top: 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: ${colors.violet_dark};
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-family: "DM Sans";
  font-style: normal;
  padding: 0 10px;
  font-size: 20px;
  color: ${colors.violet_dark};
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

export { Input, Label };
