import styled from "styled-components";
import { colors } from "../../resources/constants";

const Goal = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 20px;
  text-transform: uppercase;
`;

const SubText = styled.h3`
  margin-top: 18px;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
`;

const WrapperBar = styled.div`
  width: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 20px;
`;

// const Wrapper = styled.div`
//   margin: 0 auto;
//   width: 800px;
//   height: 100vh;
//   background-color: ${colors.white};
//   color: ${colors.violet_dark};
// `;

const TextWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const AddButton = styled.button``;

const FormWrapper = styled.div``;

export {
  Wrapper,
  TextWrapper,
  Goal,
  SubText,
  WrapperBar,
  AddButton,
  FormWrapper,
};
