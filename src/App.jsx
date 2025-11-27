import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import VotePage from "./pages/VotePage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import PolicyList from "./pages/PolicyList";
import VotePage from "./pages/VotePage";
import CreatePolicy from "./pages/CreatePolicy";
import "./styles/App.css";
import PolicyDetails from "./pages/PolicyDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VotePage />} />
      </Routes>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/policies" element={<PolicyList />} />
            <Route path="/policies/:id" element={<PolicyDetails />} />
            <Route path="/vote/:id" element={<VotePage />} />
            <Route path="/create" element={<CreatePolicy />} />

            {/* Fallback: redirect unknown URLs to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
