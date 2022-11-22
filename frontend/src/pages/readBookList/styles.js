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

const TilesWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 20px 20px 20px;
  flex-wrap: wrap;
`;

const ListWrapper = styled.table`
  width: 100%;
  border-spacing: 0 10px;
`;

const HeaderItem = styled.th`
  text-transform: uppercase;
  font-family: "DM Sans";
  font-style: normal;
`;

const ItemList = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_dark};
    color: ${colors.white};
  }
`;

const Author = styled.td`
  font-family: "DM Sans";
  font-style: normal;
`;
const TitleBook = styled.td`
  font-family: "DM Sans";
  font-style: normal;
`;
const Date = styled.td`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
`;
const Rate = styled.td`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
`;
const Number = styled.td`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
`;

const ButtonGroup = styled.div`
  width: 95%;
  display: flex;
  justify-content: right;
  margin-bottom: 20px;
`;
const ButtonLeft = styled.button`
  border-radius: 10px 0px 0px 10px;
  width: 50px;
  background-color: ${(props) =>
    props.isChosen == true ? colors.violet_dark : colors.white};
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.violet_dark};

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_light};
  }
`;
const ButtonRight = styled.button`
  border-radius: 0px 10px 10px 0px;
  width: 50px;
  background-color: ${(props) =>
    props.isChosen == true ? colors.violet_dark : colors.white};
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.violet_dark};

  &:hover {
    cursor: pointer;
    background-color: ${colors.violet_light};
  }
`;

export {
  Wrapper,
  TilesWrapper,
  ButtonGroup,
  ButtonLeft,
  ButtonRight,
  Title,
  HeaderItem,
  Number,
  ListWrapper,
  ItemList,
  Author,
  Date,
  Rate,
  TitleBook,
};
