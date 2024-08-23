import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Savings from "../page/Savings/Savings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saving" element={<Savings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
