import { useState } from "react";
import {
  Wrapper,
  TextWrapper,
  Goal,
  SubText,
  WrapperBar,
  FormWrapper,
  AddButton,
} from "./styles";
import { Input } from "../input/Input";
import { useStore } from "../../Store";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../resources/react-circular-progress-bar-styles.css";
import { colors } from "../../resources/constants";

export const GoalsList = ({ goals }) => {
  const { state, dispatch } = useStore();

  const [isExpand, setIsExpand] = useState(false);
  const [goal, setGoal] = useState();

  return (
    <Wrapper>
      {goals?.length > 0 ? (
        goals.map((goal) => {
          <div key={goal.id}>
            <TextWrapper>
              <Goal>
                {goal.progress}/{goal.goal}{" "}
                {goal.type == "books" ? " książek" : " stron"}
              </Goal>
              <SubText>START: {goal.startDate}</SubText>
              <SubText>KONIEC: {goal.endDate}</SubText>
              <SubText>Pozostało {goal.timeLeft} dni.</SubText>
            </TextWrapper>
            <WrapperBar>
              <CircularProgressbar
                value={
                  goal.progress > goal.goal
                    ? 100
                    : (goal.progress * 100) / goal.goal
                }
                text={`${Math.round((goal.progress * 100) / goal.goal, 2)}%`}
                styles={buildStyles({
                  pathColor: colors.pink_dark,
                  textColor: colors.violet_dark,
                })}
              />
            </WrapperBar>
          </div>;
        })
      ) : (
        <Goal>Brak celu czytelniczego...</Goal>
      )}
      <AddButton onClick={() => setIsExpand(true)}>Dodaj cel!</AddButton>
      {isExpand && (
        <FormWrapper>
          <Input
            label="Cel"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type="number"
          />
        </FormWrapper>
      )}
    </Wrapper>
  );
};
