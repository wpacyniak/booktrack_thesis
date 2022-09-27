import { Wrapper } from "./styles";

export const Button = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};
