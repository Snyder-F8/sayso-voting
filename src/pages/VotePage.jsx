import React, { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard";
import VoteButton from "../components/VoteButton";
import { useParams } from "react-router-dom";
import { api } from "../api/api.js";
import "../styles/VotePage.css";

export default function VotePage() {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/policies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPolicy(data);
        setYesVotes(data?.yesVotes || 0);
        setNoVotes(data?.noVotes || 0);
      });
  }, [id]);

  function handleVote(status) {
    let randomUserId = (Math.random() + 1).toString(36).substring(7);

    api.addVoteToPolicy(policy.id, randomUserId, status).then(() => {
      console.log("Vote added");

      if (status === "yes") {
        setYesVotes((prev) => prev + 1);
      } else {
        setNoVotes((prev) => prev + 1);
      }

      window.location.href = `/policies/${policy.id}`;
    });
  }

  if (!policy) return <h2>Loading policy...</h2>;

  return (
    <div className="vote-page">
      <h2>{policy.title}</h2>
      <p>{policy.description}</p>

      <ResultCard title={policy.title} yesVotes={yesVotes} noVotes={noVotes} />

      <div className="buttons">
        <VoteButton
          label="Yes"
          onVote={() => handleVote("yes")}
          color="#4CAF50"
        />
        <VoteButton
          label="No"
          onVote={() => handleVote("no")}
          color="#F44336"
        />
      </div>
    </div>
  );
}
