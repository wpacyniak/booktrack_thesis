import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, FormWrapper, Input, Button, Text, Title } from "./styles";
import { Footer } from "../../components/footer/Footer";
import { ErrorModal } from "../../components/errorModal/ErrorModal";

export const Login = () => {
  const navigate = useNavigate();

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

    const res = await fetch("http://localhost:5000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const user = await res.json();
      // set userID
      console.log(user);
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
