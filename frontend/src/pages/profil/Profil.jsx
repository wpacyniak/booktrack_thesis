import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Login,
  Email,
  Number,
  Logo,
  FullLogoWrapper,
  LogoLabel,
  RowColumn,
  RowSecond,
  LogoWrapper,
  Row,
  ListWrapper,
  GraphPagesTitle,
  VariableText,
  ConstText,
  OptionsWrapper,
  Option,
  TextWrapper,
  SignOutButton,
} from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { colors } from "../../resources/constants";
import { useStore } from "../../Store";
import { Button } from "../../components/button/Button";

export const Profil = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStore();
  const [statistics, setStatistics] = useState();
  const currentYear = new Date().getFullYear();
  const [pagesData, setPagesData] = useState([]);
  const [graphBooks, setGraphBooks] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [graphYear, setGraphYear] = useState(currentYear);
  const [years, setYears] = useState([]);
  const [allBooks, setAllBooks] = useState(0);
  const [avgBooksPerYear, setAvgBooksPerYear] = useState(0);
  const [biggestBook, setBiggestBook] = useState(0);
  const [biggestYear, setBiggestYear] = useState(0);
  const [avgPagesMonth, setAvgPagesMonth] = useState(0);

  useEffect(() => {
    if (!state.user || !state.auth_token) {
      dispatch({
        type: "SET_USER",
        payload: JSON.parse(localStorage.getItem("user")),
      });
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: JSON.parse(localStorage.getItem("token")),
      });
    } else {
      db_statistics = getStatictics();
    }
  }, [state.user, state.token]);

  useEffect(() => {
    if (graphYear != "all") {
      setPagesData(preparePagesMonths(graphYear));
    } else {
      setPagesData(preparePagesAll());
    }
    if (statistics) {
      setAllBooks(getAllBooks());
      setGraphBooks(getBooksYears());
      setAvgBooksPerYear(Math.round(allBooks / years.length));
      setAvgPagesMonth(prepareAvgPagesMonth());
    }
  }, [graphYear, statistics]);

  function prepareAvgPagesMonth() {
    allPages = 0;
    avgPages = 0;
    if (statistics) {
      for (month in statistics[currentYear]["months"]) {
        allPages += statistics[currentYear]["months"][month]["pages"];
      }
      avgPages = Math.round(allPages / 12);
    }
    return avgPages;
  }

  useEffect(() => {
    if (!state.yearsList) {
      dispatch({
        type: "SET_YEARS_LIST",
        payload: JSON.parse(localStorage.getItem("years_list")),
      });
    } else {
      setYears(state.yearsList);
    }
  }, [state.yearsList]);

  async function getStatictics() {
    const res = await fetch("http://localhost:5000/get_statistics", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status == 200) {
      const data = await res.json();
      setStatistics(data.statistics);
      setBiggestBook(data.biggestBook);
      return data.statistics;
    }
  }

  function preparePagesAll() {
    var monthList = [
      { name: "STY", pages: 0 },
      { name: "LUT", pages: 0 },
      { name: "MAR", pages: 0 },
      { name: "KWI", pages: 0 },
      { name: "MAJ", pages: 0 },
      { name: "CZE", pages: 0 },
      { name: "LIP", pages: 0 },
      { name: "SIE", pages: 0 },
      { name: "WRZ", pages: 0 },
      { name: "PAŹ", pages: 0 },
      { name: "LIS", pages: 0 },
      { name: "GRU", pages: 0 },
    ];
    if (statistics) {
      for (year in statistics) {
        for (month in statistics[year]["months"]) {
          monthList[month]["pages"] +=
            statistics[year]["months"][month]["pages"];
        }
      }
    }
    return monthList;
  }

  function preparePagesMonths(year) {
    var monthList = [
      { name: "STY", pages: 0 },
      { name: "LUT", pages: 0 },
      { name: "MAR", pages: 0 },
      { name: "KWI", pages: 0 },
      { name: "MAJ", pages: 0 },
      { name: "CZE", pages: 0 },
      { name: "LIP", pages: 0 },
      { name: "SIE", pages: 0 },
      { name: "WRZ", pages: 0 },
      { name: "PAŹ", pages: 0 },
      { name: "LIS", pages: 0 },
      { name: "GRU", pages: 0 },
    ];
    if (statistics) {
      for (month in statistics[year]["months"]) {
        monthList[month]["pages"] = statistics[year]["months"][month]["pages"];
      }
    }
    return monthList;
  }

  function getBooksYears() {
    var list = [];
    var maxYear = 0;
    if (statistics) {
      for (year in statistics) {
        list.push({ name: year, value: statistics[year]["books"] });
        if (statistics[year]["books"] > maxYear) {
          maxYear = statistics[year]["books"];
        }
      }
      setBiggestYear(maxYear);
    }
    return list;
  }

  function handleList() {
    setIsExpanded(!isExpanded);
  }

  function handleClickYear(year) {
    setGraphYear(year);
    setIsExpanded(!isExpanded);
  }

  function getAllBooks() {
    number = 0;
    for (year in statistics) {
      number += statistics[year]["books"];
    }
    return number;
  }

  async function logOut() {
    const res = await fetch("http://localhost:5000/sign_out", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth_token}`,
      },
      method: "GET",
    });

    if (res.status == 200) {
      localStorage.clear();
      navigate("/login");
    }
  }

  return (
    <Wrapper>
      <Header />
      <Row>
        <FullLogoWrapper>
          <LogoLabel>Przeczytane w {currentYear} roku:</LogoLabel>
          <LogoWrapper>
            <Logo
              src={require("../../resources/images/icon_book.png")}
              alt="logo"
            />
            <Number>{statistics && statistics[currentYear]["books"]}</Number>
          </LogoWrapper>
          <LogoLabel>książek</LogoLabel>
        </FullLogoWrapper>
        <TextWrapper>
          <Login>{state.user?.username}</Login>
          <Email>{state.user?.email}</Email>
          <SignOutButton onClick={() => logOut()}>Wyloguj</SignOutButton>
        </TextWrapper>
      </Row>
      <RowColumn>
        <ConstText>
          ŚREDNIA LICZBA KSIĄŻEK PRZECZYTANYCH W CIĄGU ROKU: {"  "}
          <VariableText>{avgBooksPerYear}</VariableText>
        </ConstText>
        <ConstText>
          Ilość stron w największa przeczytanej książce to: {"  "}
          <VariableText>{biggestBook}</VariableText>
        </ConstText>
        <ConstText>
          Największa przeczytana liczba książek w ciągu roku to: {"  "}
          <VariableText>{biggestYear}</VariableText>
        </ConstText>
        <ConstText>
          Średnia liczba stron przeczytana w ciągu miesiąca w tym roku to:{" "}
          {"  "}
          <VariableText>{avgPagesMonth}</VariableText>
        </ConstText>
      </RowColumn>
      <RowSecond>
        <GraphPagesTitle>
          {graphYear == "all"
            ? "Liczba stron przeczytana w danym miesiącu we wszystkich latach:"
            : `Liczba stron przeczytana w danym miesiącu w ${graphYear} roku:`}
        </GraphPagesTitle>
      </RowSecond>
      <RowSecond>
        <ListWrapper>
          <Button onClick={handleList}>Wybierz rok</Button>
          <OptionsWrapper isExpanded={isExpanded}>
            {years?.map((year) => (
              <Option key={year} onClick={() => handleClickYear(year)}>
                {year}
              </Option>
            ))}
            <Option onClick={() => handleClickYear("all")}>∞</Option>
          </OptionsWrapper>
        </ListWrapper>
      </RowSecond>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={pagesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pages" fill={colors.violet_light} />
        </BarChart>
      </ResponsiveContainer>
      <RowSecond>
        <div>
          <PieChart width={300} height={300}>
            <Pie
              data={graphBooks}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={100}
              fill={colors.violet_dark}
              label
            />
            <Tooltip />
          </PieChart>
          <LogoLabel>Przeczytane książki w danym roku:</LogoLabel>
        </div>
        <FullLogoWrapper>
          <LogoLabel>Wszystkie przeczytane książki:</LogoLabel>
          <LogoWrapper>
            <Logo
              src={require("../../resources/images/icon_book.png")}
              alt="logo"
            />
            <Number>{allBooks}</Number>
          </LogoWrapper>
        </FullLogoWrapper>
      </RowSecond>
      <Footer />
    </Wrapper>
  );
};
