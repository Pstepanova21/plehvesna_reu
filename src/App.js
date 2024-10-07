import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Forms from "./components/forms/forms";
import About from "./components/about/about";
import LoaderScreen from "./components/LoaderScreen/LoaderScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <LoaderScreen />
        ) : (
          <>
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
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
