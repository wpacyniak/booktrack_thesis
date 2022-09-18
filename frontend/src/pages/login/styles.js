import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  color: ${colors.violet_dark};
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 19vh;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
`;

const Text = styled.h2``;

const Login = styled.input`
  width: 280px;
  height: 70px;
  border: none;
  border-radius: 25px;
  box-shadow: 5px 10px ${colors.violet_light};
  font-family: "DM Sans";
  font-style: normal;
  padding: 0 10px;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const Password = styled.input`
  width: 280px;
  height: 70px;
  border: none;
  border-radius: 25px;
  box-shadow: 5px 10px ${colors.violet_light};
  font-family: "DM Sans";
  font-style: normal;
  padding: 0 10px;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const FormWrapper = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

export {
  Wrapper,
  FormWrapper,
  Login,
  Password,
  ButtonWrapper,
  Button,
  Text,
  Title,
};
