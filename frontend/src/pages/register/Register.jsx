import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, FormWrapper, Input, Button, Text, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import { useStore } from "../../Store";

export const Register = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    if (!username || !password || !email) {
      setText("Wszystkie pola muszą być uzupełnione!");
      setIsModalOpen(true);
      return;
    }

    const body = {
      username,
      password,
      email,
    };

    const res = await fetch("http://localhost:5000/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const { user, token } = await res.json();
      console.log(user, token);
      dispatch({ type: "SET_USER", payload: user });
      dispatch({ type: "SET_AUTH_TOKEN", payload: token });
      navigate("/home");
      return;
    }

    if (res.status === 400) {
      setText("Taki login już istnieje!");
      setPassword("");
      setUsername("");
      setEmail("");
      setIsModalOpen(true);
      console.log("Niepoprawne dane użytkownika.");
      return;
    }

    setText("Nie udało się zarejestrować!");
    setPassword("");
    setUsername("");
    setEmail("");
    setIsModalOpen(true);
    console.log("Nie udało się zarejestrować.");
  };

  return (
    <Wrapper>
      <Title>BOOKTRACK</Title>
      <Text>Uzupełnij formularz, aby móc się zarejstrować:</Text>
      <ErrorModal isOpen={isModalOpen} text={text} setIsOpen={setIsModalOpen} />
      <FormWrapper>
        <Input
          placeholder="Login"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Hasło"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick}>Zarejestruj</Button>
      </FormWrapper>
      <Footer />
    </Wrapper>
  );
};
