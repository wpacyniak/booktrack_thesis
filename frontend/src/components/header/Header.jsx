import { useState, useEffect } from "react";
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
import { useStore } from "../../Store";

export const Header = () => {
  const { state, dispatch } = useStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (!state.yearsList) {
      dispatch({
        type: "SET_YEARS_LIST",
        payload: JSON.parse(localStorage.getItem("years_list")),
      });
    } else {
      setYears(state.yearsList);
    }
  }, [state.yearsList]);

  function handleHome() {
    navigate("/home");
  }

  function handleList() {
    setIsExpanded(!isExpanded);
  }

  function handleClickYear(year) {
    dispatch({ type: "SET_YEAR", payload: year });
    localStorage.setItem("year", JSON.stringify(year));
    setIsExpanded(!isExpanded);
    navigate("/readBooks");
  }

  function handlePlan() {
    navigate("/planBooks");
  }

  function handleProfil() {
    navigate("/profil");
  }

  return (
    <Wrapper>
      <Logo src={require("../../resources/images/logo.png")} alt="logo" />
      <ButtonsWrapper>
        <Button onClick={handleHome}>Home</Button>
        <Button onClick={() => handleProfil()}>Profil</Button>
        <ListWrapper>
          <Button onClick={handleList}>Lista</Button>
          <OptionsWrapper isExpanded={isExpanded}>
            {years?.map((year) => (
              <Option key={year} onClick={() => handleClickYear(year)}>
                {year}
              </Option>
            ))}
            <Option onClick={() => handleClickYear("all")}>∞</Option>
          </OptionsWrapper>
        </ListWrapper>
        <Button onClick={handlePlan}>Plany</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
