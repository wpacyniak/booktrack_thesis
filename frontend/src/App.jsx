import React from "react";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { Welcome } from "./pages/welcome/Welcome";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import { PlanBookList } from "./pages/planBookList/PlanBookList";
import { ReadBookList } from "./pages/readBookList/ReadBookList";
import { Book } from "./pages/book/Book";
import { Profil } from "./pages/profil/Profil";
import { Store } from "./Store";

const App = () => {
  return (
    <div>
      <Store initialState={{ user: null }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/readBooks"
            element={
              <PrivateRoute>
                <ReadBookList />
              </PrivateRoute>
            }
          />
          <Route
            path="/planBooks"
            element={
              <PrivateRoute>
                <PlanBookList />
              </PrivateRoute>
            }
          />
          <Route
            path="/book"
            element={
              <PrivateRoute>
                <Book />
              </PrivateRoute>
            }
          />
          <Route
            path="/profil"
            element={
              <PrivateRoute>
                <Profil />
              </PrivateRoute>
            }
          />
        </Routes>
      </Store>
    </div>
  );
};

export default App;
