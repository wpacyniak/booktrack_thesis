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

export { Wrapper, Header, Logo, ButtonsWrapper };
