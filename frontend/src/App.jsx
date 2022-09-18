import React from "react";
import { Route, Routes } from "react-router";
import { Welcome } from "./pages/welcome/Welcome";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
