import {
  Wrapper,
  TextWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  Button,
} from "./styles";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Title>BOOKTRACK</Title>
        <Subtitle>Witaj w swoim własnym książkowym kąciku!</Subtitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button onClick={handleLogin}>Zaloguj</Button>
        <Button onClick={handleRegister}>Zarejestruj</Button>
      </ButtonWrapper>
      <Footer />
    </Wrapper>
  );
};
