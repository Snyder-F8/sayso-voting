import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VoteButton from "../components/VoteButton";
import {api} from "../api/api.js";



function VotePage() {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/policies/${id}`)
      .then(res => res.json())
      .then(data => setPolicy(data));
  }, [id]);

  console.log("policy", policy);

  function handleVote(status) {
      let r = (Math.random() + 1).toString(36).substring(7);
      console.log("random", r);
        api.addVoteToPolicy(policy.id, r, status).then(() => {
            console.log("Added Vote")
            window.location.href = `/policies/${policy.id}`
        })
  }

  if (!policy) return <h2>Loading policy...</h2>;

  return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center w-full">
          <div className="w-full max-w-3xl rounded-2xl shadow-lg p-6 bg-white">
              <h2>{policy.title}</h2>
              <p>{policy.description}</p>

              <div className="vote-buttons">
                <VoteButton label="Yes" color="green" onVote={() => handleVote("yes")} />
                <VoteButton label="No" color="red" onVote={() => handleVote("no")} />
              </div>


          </div>
    </div>
  );
}

export default VotePage;