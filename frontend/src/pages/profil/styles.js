import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  height: calc(100vh - 50px);
  background-color: ${colors.white};
  color: ${colors.violet_dark};
  overflow-y: scroll;
  box-sizing: border-box;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; //Safari and Chrome
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 100px;
`;

const TextWrapper = styled.div``;

const Email = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 300;
`;

const Login = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
`;

const Logo = styled.img`
  width: 100%;
`;

const LogoWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 200px;
`;

const LogoLabel = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Number = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 140px;
  font-weight: bold;
`;

const FullLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountText = styled.p`
  margin-top: 80px;
  font-size: 18px;
  width: 240px;
  font-family: "DM Sans";
  font-style: normal;
`;

export {
  Wrapper,
  Email,
  AmountText,
  FullLogoWrapper,
  TextWrapper,
  LogoLabel,
  Login,
  Number,
  LogoWrapper,
  Logo,
  Row,
};
