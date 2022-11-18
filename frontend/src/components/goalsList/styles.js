import styled from "styled-components";
import { colors } from "../../resources/constants";

const GoalWrapper = styled.tr``;

const GoalsWrapper = styled.table`
  width: 600px;
  border-spacing: 0 30px;
`;

const Goal = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SubText = styled.h3`
  margin-top: 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
`;

const WrapperBar = styled.td`
  width: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 10px;
`;

const TextWrapper = styled.td``;

const AddButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.violet_dark};
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-size: 17px;
  text-transform: uppercase;
  font-family: "DM Sans";
  font-style: normal;

  &:hover {
    background-color: ${colors.violet_hover};
    cursor: pointer;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 80px;
  border: 1px solid ${colors.violet_dark};
  border-radius: 15px;
  font-family: "DM Sans";
  font-style: normal;
  padding: 5px;
  font-size: 15px;
  color: ${colors.violet_dark};

  &:focus {
    outline: none;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Radio = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioInput = styled.input``;

const RadioLabel = styled.label`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 15px;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 15px;
  text-transform: uppercase;
`;

const DatePicker = styled.input`
  font-weight: 900;
  border: 1px solid ${colors.violet_dark};
  border-radius: 15px;
  padding: 5px;
  font-size: 16px;
  ::-webkit-datetime-edit-month-field {
    color: ${colors.violet_dark};
  }
  ::-webkit-datetime-edit-day-field {
    color: ${colors.violet_dark};
  }
  ::-webkit-datetime-edit-year-field {
    color: ${colors.violet_dark};
  }
  ::-webkit-calendar-picker-indicator {
    color: ${colors.violet_dark};
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: ${colors.white};
  background-color: ${colors.violet_dark};
  border-radius: 15px;
  border: none;
  padding: 7px 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "DM Sans";
  font-style: normal;

  &:hover {
    background-color: ${colors.violet_hover};
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  color: ${colors.violet_dark};
  font-weight: 900;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.td`
  padding: 10px;
`;

const DeleteButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.violet_dark};
  border-radius: 15px;
  border: none;
  padding: 7px 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "DM Sans";
  font-style: normal;

  &:hover {
    background-color: ${colors.violet_hover};
    cursor: pointer;
  }
`;

export {
  Wrapper,
  ErrorText,
  Radio,
  Button,
  TextWrapper,
  Input,
  Goal,
  RadioWrapper,
  SubText,
  Label,
  DatePicker,
  InputsWrapper,
  GoalWrapper,
  RadioLabel,
  WrapperBar,
  ButtonWrapper,
  DeleteButton,
  AddButton,
  RadioInput,
  GoalsWrapper,
  FormWrapper,
};
