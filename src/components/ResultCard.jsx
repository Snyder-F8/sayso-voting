import React from "react";
import "../styles/ResultCard.css";

function ResultCard({ yesVotes, noVotes }) {
  const total = yesVotes + noVotes;
  const yesPercent = total === 0 ? 0 : ((yesVotes / total) * 100).toFixed(1);
  const noPercent = total === 0 ? 0 : ((noVotes / total) * 100).toFixed(1);

  return (
    <div className="result-card">
      <h3>Voting Results</h3>
      <p>Yes Votes: {yesVotes} ({yesPercent}%)</p>
      <p>No Votes: {noVotes} ({noPercent}%)</p>
    </div>
  );
}

export default ResultCard;