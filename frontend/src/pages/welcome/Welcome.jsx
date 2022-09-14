import {
  Wrapper,
  TextWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  Button,
  ImageLamp,
  ImageBooks,
  Footer,
} from "./styles";
import { Footer } from "../../components/footer/Footer";

export const Welcome = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>BOOKTRACK</Title>
        <Subtitle>Witaj w swoim własnym książkowym kąciku!</Subtitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button>Zaloguj</Button>
        <Button>Zarejestruj</Button>
      </ButtonWrapper>
      <Footer />
    </Wrapper>
  );
};
