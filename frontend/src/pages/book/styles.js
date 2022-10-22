import styled from "styled-components";
import { colors } from "../../resources/constants";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 100vh;
  background-color: ${colors.white};
  color: ${colors.violet_dark};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1vh;
  letter-spacing: 8px;
`;

const SubText = styled.h4`
  font-family: "DM Sans";
  font-style: normal;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
`;

const Quote = styled.p`
  margin-top: 1vh;
  align-self: center;
  width: 80%;
  text-align: center;
  font-style: italic;
`;

const NotesWrapper = styled.div`
  margin-top: 2vh;
  display: flex;
  gap: 40px;
`;

const Notes = styled.p`
  margin-right: 40px;
`;

const Cover = styled.img`
  width: 300px;
  height: auto;
  margin-left: 20px;
`;

export {
  Wrapper,
  InfoWrapper,
  Title,
  SubText,
  Quote,
  NotesWrapper,
  Notes,
  Cover,
};
