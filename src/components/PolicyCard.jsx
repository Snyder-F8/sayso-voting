import React from "react";
import { Link } from "react-router-dom";
import "../styles/PolicyCard.css";

export default function PolicyCard({ policy }) {
  return (
    <div className="policy-card">
      <h2>{policy.title}</h2>
      <p className="policy-desc">
        {policy.description.slice(0, 100)}...
      </p>

      <div className="policy-actions">
        <Link className="btn view-btn" to={`/policies/${policy.id}`}>
          View Details
        </Link>

        <Link className="btn vote-btn" to={`/vote/${policy.id}`}>
          Vote
        </Link>
      </div>
    </div>
  );
}
