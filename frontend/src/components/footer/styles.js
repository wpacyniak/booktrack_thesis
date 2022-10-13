import styled from "styled-components";
import { colors } from "../../resources/constants";

const ImageLamp = styled.img`
  position: absolute;
  bottom: 50px;
  right: 8vw;
`;

const ImageBooks = styled.img`
  position: absolute;
  bottom: 50px;
  left: 8vw;
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${colors.violet_dark};
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
`;

export { Wrapper, ImageBooks, ImageLamp };
