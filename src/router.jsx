import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Skills from "./pages/Skills";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
