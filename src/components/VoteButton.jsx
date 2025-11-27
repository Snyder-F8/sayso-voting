import React from "react";
import "../styles/VoteButton.css";

export default function VoteButton({ label, onVote, color = "#4CAF50" }) {
  return (
    <button
      className="vote-button"
      style={{ backgroundColor: color }}
      onClick={onVote}
    >
      {label}
    </button>
  );
}