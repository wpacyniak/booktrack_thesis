import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Login,
  Email,
  Number,
  Logo,
  FullLogoWrapper,
  LogoLabel,
  AmountText,
  LogoWrapper,
  Row,
  TextWrapper,
} from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import { useStore } from "../../Store";

export const Profil = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStore();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!state.user || !state.auth_token) {
      dispatch({
        type: "SET_USER",
        payload: JSON.parse(localStorage.getItem("user")),
      });
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: JSON.parse(localStorage.getItem("token")),
      });
    } else {
      getStatictics();
      //   pobranie danych o przeczytanych ksiazkach + stronach
    }
  }, [state.user, state.token]);

  async function getStatictics() {
    const res = await fetch("http://localhost:5000/get_statistics", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status == 200) {
      const statictics = await res.json();
      console.log(statictics);
    }
  }

  return (
    <Wrapper>
      <Header />
      <Row>
        <FullLogoWrapper>
          <LogoLabel>Przeczytane w {currentYear} roku:</LogoLabel>
          <LogoWrapper>
            <Logo
              src={require("../../resources/images/icon_book.png")}
              alt="logo"
            />
            <Number>10</Number>
          </LogoWrapper>
          <LogoLabel>książek</LogoLabel>
        </FullLogoWrapper>
        <TextWrapper>
          <Login>{state.user.username}</Login>
          <Email>{state.user.email}</Email>
          <AmountText>
            W tym roku przeczytałeś o 10% więcej niż w poprzednim.
          </AmountText>
        </TextWrapper>
      </Row>

      <Footer />
    </Wrapper>
  );
};
