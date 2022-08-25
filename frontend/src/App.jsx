import React from "react";
import { render } from "react-dom";
import { Link, Router } from '@reach/router'
// TODO:: Maube choose react-router ??? And what about the store?
import ThemeContext from "./ThemeContext";

const App = () => {

  return (
    <React.StrictMode>
      <ThemeContext.Provider>
        <div>
          <header>
            <Link to="/">
              Adopt me!
            </Link>
          </header>
          <Router>
            <Home path="/"/>
            <Login path="/login"/>
            <Register path="/register"/>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));