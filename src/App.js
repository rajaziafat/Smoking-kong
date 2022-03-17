import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ContextProvider from "context/ContextProvider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
