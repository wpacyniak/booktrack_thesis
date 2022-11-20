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
  align-items: center;
  gap: 100px;
`;

const RowSecond = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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

const GraphPagesTitle = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-size: 20px;
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

const ListWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  visibility: ${(props) => (props.isExpanded ? "visible" : "hidden")};
  background-color: ${colors.white};
  border: 2px solid ${colors.violet_dark};
  border-top: none;
  width: 100%;
`;

const Option = styled.p`
  text-align: center;
  border-top: 2px solid ${colors.violet_dark};
  font-weight: bold;
  padding 10px 0;
  font-size: 20px;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.violet_dark};
    cursor: pointer;
  }
`;

const SignOutButton = styled.button`
  margin-top: 20px;
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
export {
  Wrapper,
  SignOutButton,
  Email,
  GraphPagesTitle,
  OptionsWrapper,
  Option,
  ListWrapper,
  FullLogoWrapper,
  TextWrapper,
  RowSecond,
  LogoLabel,
  Login,
  Number,
  LogoWrapper,
  Logo,
  Row,
};
