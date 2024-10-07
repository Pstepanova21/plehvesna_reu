import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Forms from "./components/forms/forms";
import About from "./components/about/about";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Forms />
                <About />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
