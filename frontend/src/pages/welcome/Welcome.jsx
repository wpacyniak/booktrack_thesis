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

export const Welcome = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>BOOKTRACK</Title>
        <Subtitle>jakis tekst tu wstaw książki</Subtitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button>Zaloguj</Button>
        <Button>Zarejestruj</Button>
      </ButtonWrapper>
      <Footer>
        <ImageLamp
          src={require("../../resources/images/lamp.png")}
          alt="lamp"
        />
        <ImageBooks
          src={require("../../resources/images/books_plant.png")}
          alt="books and plant"
        />
      </Footer>
    </Wrapper>
  );
};
