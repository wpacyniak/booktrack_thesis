import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  height: calc(100vh - 50px);
  background-color: ${colors.white};
  color: ${colors.violet_dark};
  overflow-y: scroll;
  box-sizing: border-box;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; //Safari and Chrome
  }
`;

export { Wrapper };
