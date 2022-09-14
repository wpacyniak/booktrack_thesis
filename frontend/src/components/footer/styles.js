import styled from "styled-components";
import { colors } from "../../resources/constants";

const ImageLamp = styled.img`
  position: absolute;
  bottom: 10vh;
  right: 8vw;
`;

const ImageBooks = styled.img`
  position: absolute;
  bottom: 10vh;
  left: 8vw;
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${colors.violet_dark};
  width: 100%;
  height: 10vh;
  bottom: 0;
`;

export { Wrapper, ImageBooks, ImageLamp };
