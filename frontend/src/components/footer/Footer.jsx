import { ImageLamp, ImageBooks, Wrapper } from "./styles";

export const Footer = () => {
  return (
    <Wrapper>
      <ImageLamp src={require("../../resources/images/lamp.png")} alt="lamp" />
      <ImageBooks
        src={require("../../resources/images/books_plant.png")}
        alt="books and plant"
      />
    </Wrapper>
  );
};
