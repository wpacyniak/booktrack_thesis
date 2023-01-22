import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, FormWrapper, Input, Button, Text, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { ErrorModal } from "../../components/errorModal/ErrorModal";
import { useStore } from "../../Store";
import { API_HOST } from "../../config";

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    if (!username || !password) {
      setText("Oba pola muszą być uzupełnione!");
      setIsModalOpen(true);
      return;
    }

    const body = {
      username,
      password,
    };

    const res = await fetch(`${API_HOST}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const { user, token } = await res.json();
      dispatch({ type: "SET_USER", payload: user });
      dispatch({ type: "SET_AUTH_TOKEN", payload: token });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/home");
      return;
    }

    if (res.status === 404) {
      setText("Niepoprawne dane logowania!");
      setPassword("");
      setUsername("");
      setIsModalOpen(true);
      console.log("Niepoprawne dane logowania.");
      return;
    }

    setText("Nie udało się zalogować!");
    setPassword("");
    setUsername("");
    setIsModalOpen(true);
    console.log("Nie udało się zalogować.");
  };

  return (
    <Wrapper>
      <Title>BOOKTRACK</Title>
      <Text>Wpisz swój login i hasło, aby móc się zalogować:</Text>
      <ErrorModal isOpen={isModalOpen} text={text} setIsOpen={setIsModalOpen} />
      <FormWrapper>
        <Input
          placeholder="Login"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Hasło"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick}>Zaloguj</Button>
      </FormWrapper>
      <Footer />
    </Wrapper>
  );
};
