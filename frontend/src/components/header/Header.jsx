import { useState } from "react";
import {
  Wrapper,
  Logo,
  ButtonsWrapper,
  ListWrapper,
  OptionsWrapper,
  Option,
} from "./styles";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

const years = [2019, 2020, 2021, 2022];

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  function handleHome() {
    navigate("/home");
  }

  function handleList() {
    setIsExpanded(!isExpanded);
    // navigate("/readBooks");
  }

  function handleClickYear() {
    // setYear w contexcie
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
        <ListWrapper>
          <Button onClick={handleList}>Lista</Button>
          <OptionsWrapper isExpanded={isExpanded}>
            {years?.map((year) => (
              <Option key={year} onClick={handleClickYear}>
                {year}
              </Option>
            ))}
          </OptionsWrapper>
        </ListWrapper>
        <Button onClick={() => console.log("click")}>WishList</Button>
        <Button onClick={handlePlan}>Plany</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
