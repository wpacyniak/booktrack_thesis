import { Wrapper, Logo, ButtonsWrapper } from "./styles";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/home");
  }

  function handleList() {
    navigate("/readBooks");
  }

  function handlePlan() {
    navigate("/planBooks");
  }

  return (
    <Wrapper>
      <Logo src={require("../../resources/images/logo.png")} alt="logo" />
      <ButtonsWrapper>
        <Button onClick={handleHome}>Home</Button>
        <Button onClick={() => console.log("click")}>Profil</Button>
        <Button onClick={handleList}>Lista</Button>
        <Button onClick={() => console.log("click")}>WishList</Button>
        <Button onClick={handlePlan}>Plany</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
