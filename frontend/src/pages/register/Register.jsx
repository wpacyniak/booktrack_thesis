import {
  Wrapper,
  FormWrapper,
  Login,
  Password,
  ButtonWrapper,
  Button,
} from "./styles";
import { Footer } from "../../components/footer/Footer";

export const Register = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Login />
        <Password />
      </FormWrapper>
      <ButtonWrapper>
        <Button>Zaloguj</Button>
      </ButtonWrapper>
      <Footer />
    </Wrapper>
  );
};
