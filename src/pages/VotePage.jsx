import React, { useState } from "react";
import ResultCard from "../components/ResultCard";
import VoteButton from "../components/VoteButton";
import "../styles/VotePage.css";

export default function VotePage() {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handleVote = (vote) => {
    if (vote === "yes") setYesVotes(yesVotes + 1);
    else setNoVotes(noVotes + 1);
  };

  return (
    <div className="vote-page">
      <h2>Vote on this policy</h2>
      <ResultCard title="Sample Policy" yesVotes={yesVotes} noVotes={noVotes} />
      <div className="buttons">
        <VoteButton label="Yes" onVote={() => handleVote("yes")} color="#4CAF50" />
        <VoteButton label="No" onVote={() => handleVote("no")} color="#F44336" />
      </div>
    </div>
  );
}