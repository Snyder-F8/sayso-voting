import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import VotePage from "./pages/VotePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VotePage />} />
      </Routes>
    </BrowserRouter>
  );
}
