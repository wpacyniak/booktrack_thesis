import { Wrapper, FormWrapper, Input, Button, Text, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";

export const Login = () => {
  return (
    <Wrapper>
      <Title>BOOKTRACK</Title>
      <Text>Wpisz swój login i hasło, aby móc się zalogować:</Text>
      <FormWrapper>
        <Input placeholder="Login" />
        <Input placeholder="Hasło" type="password" />
        <Button>Zaloguj</Button>
      </FormWrapper>
      <Footer />
    </Wrapper>
  );
};
