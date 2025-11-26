import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VoteButton from "../components/VoteButton";
import ResultCard from "../components/ResultCard";
import "../styles/VotePage.css";

function VotePage() {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/policies/${id}`)
      .then(res => res.json())
      .then(data => setPolicy(data));
  }, [id]);

  function handleVote(type) {
    const updatedVotes = {
      yes: policy.votes.yes + (type === "yes" ? 1 : 0),
      no: policy.votes.no + (type === "no" ? 1 : 0)
    };

    fetch(`http://localhost:3000/policies/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ votes: updatedVotes })
    })
      .then(res => res.json())
      .then(data => setPolicy(data)); // state update required
  }

  if (!policy) return <h2>Loading policy...</h2>;

  return (
    <div className="vote-page">
      <h2>{policy.title}</h2>
      <p>{policy.description}</p>

      <div className="vote-buttons">
        <VoteButton label="Yes" color="green" onVote={() => handleVote("yes")} />
        <VoteButton label="No" color="red" onVote={() => handleVote("no")} />
      </div>

      <ResultCard
        yesVotes={policy.votes.yes}
        noVotes={policy.votes.no}
      />
    </div>
  );
}

export default VotePage;