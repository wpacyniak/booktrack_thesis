import React from "react";
import { Route, Routes } from "react-router";
import { Welcome } from "./pages/welcome/Welcome";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import { PlanBookList } from "./pages/planBookList/PlanBookList";
import { ReadBookList } from "./pages/readBookList/ReadBookList";
import { Book } from "./pages/book/Book";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/readBooks" element={<ReadBookList />} />
        <Route path="/planBooks" element={<PlanBookList />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
