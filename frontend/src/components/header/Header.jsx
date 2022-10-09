import { Wrapper, Logo, ButtonsWrapper } from "./styles";
import { Button } from "../button/Button";

export const Header = () => {
  return (
    <Wrapper>
      <Logo src={require("../../resources/images/logo.png")} alt="logo" />
      <ButtonsWrapper>
        <Button onClick={() => console.log("click")}>Profil</Button>
        <Button onClick={() => console.log("click")}>Lista</Button>
        <Button onClick={() => console.log("click")}>WishList</Button>
        <Button onClick={() => console.log("click")}>Plany</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
