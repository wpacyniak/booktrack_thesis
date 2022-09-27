import { Wrapper } from "./styles";
import { Footer } from "../../components/footer/Footer";

const user = {
  username: "brownieBarbie",
  yearlyGoal: 12,
};

const currentlyReading = {
  name: "The Love Hypothesis",
  author: "Ali Hazelwood",
  cover:
    "https://s.lubimyczytac.pl/upload/books/5024000/5024957/998409-352x500.jpg",
  pages: 416,
  progress: 20,
};

export const Home = () => {
  return (
    <Wrapper>
      <Footer />
    </Wrapper>
  );
};
