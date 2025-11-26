import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PolicyList from "./pages/PolicyList";
import PolicyDetails from "./pages/PolicyDetails";
import VotePage from "./pages/VotePage";
import CreatePoll from "./pages/CreatePoll";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<PolicyList />} />
        <Route path="/policies/:id" element={<PolicyDetails />} />
        <Route path="/vote/:id" element={<VotePage />} />
        <Route path="/create" element={<CreatePoll />} />
      </Routes>
    </BrowserRouter>
  );
}
