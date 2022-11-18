import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import { useStore } from "../../Store";

export const Profil = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};
