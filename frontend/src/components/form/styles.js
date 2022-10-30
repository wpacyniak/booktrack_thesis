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

const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 22px;
  color: ${colors.violet_dark};
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
  justify-content: space-around;
`;

const Cover = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin-top: 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: ${colors.violet_dark};
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const TextArea = styled.textarea`
  width: 200px;
  border: none;
  border-radius: 15px;
  font-family: "DM Sans";
  font-style: normal;
  padding: 10px;
  font-size: 20px;
  color: ${colors.violet_dark};
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

export {
  CloseButton,
  Title,
  Wrapper,
  Cover,
  Button,
  FormWrapper,
  Label,
  TextArea,
};
