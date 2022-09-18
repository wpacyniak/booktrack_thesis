import { Wrapper, FormWrapper, Input, Button, Text, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";

export const Register = () => {
  return (
    <Wrapper>
      <Title>BOOKTRACK</Title>
      <Text>Uzupełnij formularz, aby móc się zarejstrować:</Text>
      <FormWrapper>
        <Input placeholder="Login" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Hasło" type="password" />
        <Button>Zarejestruj</Button>
      </FormWrapper>
      <Footer />
    </Wrapper>
  );
};
