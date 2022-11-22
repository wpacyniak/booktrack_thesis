import styled from "styled-components";
import { colors } from "../../resources/constants";

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  visibility: ${(props) => (props.isExpanded ? "visible" : "hidden")};
  background-color: ${colors.white};
  border: 2px solid ${colors.violet_dark};
  border-top: none;
  width: 100%;
`;

const Option = styled.p`
  text-align: center;
  border-top: 2px solid ${colors.violet_dark};
  font-weight: bold;
  padding 10px 0;
  font-size: 20px;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.violet_dark};
    cursor: pointer;
  }
`;

export { Logo, Wrapper, ButtonsWrapper, ListWrapper, OptionsWrapper, Option };
