import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 52vw;
  height: 100vh;
  background-color: ${colors.white};
  //   overflow-y: scroll; ogarnij scroll
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 4vw;
`;

const Welcome = styled.h1``;

const WrapperBar = styled.div`
  width: 9vw;
  height: 9vh;
`;

const Goal = styled.h2``;

const Text = styled.h2``;

const Cover = styled.img``;

const Title = styled.h4``;

const Author = styled.h4``;

export {
  Wrapper,
  Header,
  Logo,
  ButtonsWrapper,
  Title,
  Welcome,
  WrapperBar,
  Goal,
  Text,
  Author,
  Cover,
};
