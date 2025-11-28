import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to SaySo Voting System</h1>

      <p className="home-subtitle">
        Participate in policy decisions. Review policies. Cast your vote.
        Your voice matters.
      </p>

      <div className="home-buttons">
        <Link to="/policies" className="btn primary-btn">
          View Policies
        </Link>

        <Link to="/vote/1" className="btn secondary-btn">
          Go to Voting Page
        </Link>

        <Link to="/create" className="btn outline-btn">
          Create New Policy (Admin)
        </Link>
      </div>
    </div>
  );
}
