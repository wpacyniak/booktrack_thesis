import { useEffect, useState } from "react";
import {
  Wrapper,
  TextWrapper,
  Goal,
  SubText,
  Input,
  WrapperBar,
  FormWrapper,
  GoalWrapper,
  RadioLabel,
  Label,
  DeleteButton,
  ButtonWrapper,
  DatePicker,
  Button,
  RadioInput,
  Radio,
  InputsWrapper,
  RadioWrapper,
  ErrorText,
  GoalsWrapper,
  AddButton,
} from "./styles";
import { useStore } from "../../Store";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../resources/react-circular-progress-bar-styles.css";
import { colors } from "../../resources/constants";

export const GoalsList = ({ goals, isChanged, setIsChanged }) => {
  const { state } = useStore();

  const [isExpand, setIsExpand] = useState(false);
  const [goal, setGoal] = useState(0);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  function handleSetIsExpand() {
    if (!isExpand) {
      setGoal();
      setStart("");
      setEnd("");
      setType("");
      setError("");
    }
    setIsExpand(!isExpand);
  }

  async function addGoal() {
    if (!goal || !type || !start || !end) {
      setError("Wszystkie pola muszą być wypełnione!");
      return;
    } else if (new Date(end).getTime() <= new Date(start).getTime()) {
      setError("Koniec musi być później niż start!");
      return;
    } else {
      const body = {
        goal,
        type,
        start,
        end,
      };
      const res = await fetch("http://localhost:5000/add_goal", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth_token}`,
        },
        method: "PUT",
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        handleSetIsExpand();
        setIsChanged(!isChanged);
        return;
      }
      setError("Coś poszło nie tak!");
    }
  }

  async function deleteGoal(id) {
    const body = { id };
    const res = await fetch("http://localhost:5000/delete_goal", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setIsChanged(!isChanged);
      return;
    }
  }

  function getDate(value) {
    newDate = new Date(value);

    const day = newDate.getDate();
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();

    return day + " " + month + " " + year;
  }

  return (
    <Wrapper>
      {goals && <Goal>Cele czytelnicze:</Goal>}
      <GoalsWrapper>
        <tbody>
          {goals.length > 0 ? (
            goals.map((goalItem) => (
              <GoalWrapper key={goalItem.id}>
                <TextWrapper>
                  <Goal>
                    {goalItem.progress}/{goalItem.goal}{" "}
                    {goalItem.type == "books" ? " książek" : " stron"}
                  </Goal>
                  <SubText>START: {getDate(goalItem.startDate)}</SubText>
                  <SubText>KONIEC: {getDate(goalItem.endDate)}</SubText>
                  <SubText>Pozostało {goalItem.timeLeft} dni</SubText>
                </TextWrapper>
                <WrapperBar>
                  <CircularProgressbar
                    value={
                      goalItem.progress > goalItem.goal
                        ? 100
                        : (goalItem.progress * 100) / goalItem.goal
                    }
                    text={`${Math.round(
                      (goalItem.progress * 100) / goalItem.goal,
                      2
                    )}%`}
                    styles={buildStyles({
                      pathColor: colors.pink_dark,
                      textColor: colors.violet_dark,
                    })}
                  />
                </WrapperBar>
                <ButtonWrapper>
                  <DeleteButton onClick={() => deleteGoal(goalItem.id)}>
                    Usuń
                  </DeleteButton>
                </ButtonWrapper>
              </GoalWrapper>
            ))
          ) : (
            <tr>
              <td>
                <Goal>Brak celu czytelniczego...</Goal>
              </td>
            </tr>
          )}
        </tbody>
      </GoalsWrapper>
      <AddButton onClick={() => handleSetIsExpand(!isExpand)}>
        {isExpand ? "Anuluj" : "Dodaj cel!"}
      </AddButton>
      {isExpand && (
        <FormWrapper>
          <InputsWrapper>
            <Input
              type="number"
              placeholder="CEL"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <RadioWrapper onChange={(e) => setType(e.target.value)}>
              <Radio>
                <RadioInput id="pages" type="radio" name="type" value="pages" />
                <RadioLabel>stron</RadioLabel>
              </Radio>
              <Radio>
                <RadioInput id="books" type="radio" name="type" value="books" />
                <RadioLabel>książek</RadioLabel>
              </Radio>
            </RadioWrapper>
            <>
              <Label>Start:</Label>
              <DatePicker
                type="date"
                onChange={(e) => setStart(e.target.value)}
                value={start}
              />
            </>
            <>
              <Label>Koniec:</Label>
              <DatePicker
                type="date"
                onChange={(e) => setEnd(e.target.value)}
                value={end}
              />
            </>
          </InputsWrapper>
          <Button onClick={() => addGoal()}>Dodaj</Button>
          <ErrorText>{error}</ErrorText>
        </FormWrapper>
      )}
    </Wrapper>
  );
};
