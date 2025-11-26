import React from "react";
import "../styles/VoteButton.css";

function VoteButton({ label, color, onVote }) {
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

export default VoteButton;