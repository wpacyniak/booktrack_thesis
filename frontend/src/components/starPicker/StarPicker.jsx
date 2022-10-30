import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Wrapper } from "./styles";

export const StarPicker = ({ value, setValue }) => {
  return (
    <Wrapper>
      {value >= 1 ? (
        <AiFillStar
          onClick={() => setValue(1)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineStar
          onClick={() => setValue(1)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      )}
      {value >= 2 ? (
        <AiFillStar
          onClick={() => setValue(2)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineStar
          onClick={() => setValue(2)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      )}
      {value >= 3 ? (
        <AiFillStar
          onClick={() => setValue(3)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineStar
          onClick={() => setValue(3)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      )}
      {value >= 4 ? (
        <AiFillStar
          onClick={() => setValue(4)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineStar
          onClick={() => setValue(4)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      )}
      {value >= 5 ? (
        <AiFillStar
          onClick={() => setValue(5)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineStar
          onClick={() => setValue(5)}
          style={{ color: "#2e2562", fontSize: "30px" }}
        />
      )}
    </Wrapper>
  );
};
