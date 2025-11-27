import React from "react";
import "../styles/ResultCard.css";

export default function ResultCard({ title = "Policy", yesVotes = 0, noVotes = 0 }) {
  const totalVotes = yesVotes + noVotes;
  const yesPercent = totalVotes === 0 ? 0 : ((yesVotes / totalVotes) * 100).toFixed(1);
  const noPercent = totalVotes === 0 ? 0 : ((noVotes / totalVotes) * 100).toFixed(1);

  return (
    <div className="result-card">
      <h3>{title}</h3>
      <p>Yes: {yesVotes} ({yesPercent}%)</p>
      <p>No: {noVotes} ({noPercent}%)</p>
    </div>
  );
}