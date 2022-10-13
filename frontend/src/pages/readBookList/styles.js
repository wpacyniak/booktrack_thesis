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

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 20px 20px 20px;
  flex-wrap: wrap;
`;

export { Wrapper, ListWrapper, Title };
