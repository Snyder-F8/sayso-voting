// src/pages/PolicyDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/api";

export default function PolicyDetails() {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);
  const [votes, setVotes] = useState([]);

  // Fetch policy & votes
  useEffect(() => {
    api.getPolicyById(id).then(setPolicy);
    api.getVotesForPolicy(id).then(setVotes);
  }, [id]);

  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center pt-28">
        Loading policy...
      </div>
    );
  }

  // Vote statistics
  const yesVotes = votes.filter((v) => v.vote === "yes").length;
  const noVotes = votes.filter((v) => v.vote === "no").length;
  const totalVotes = yesVotes + noVotes;
  const yesPercentage = ((yesVotes / (totalVotes || 1)) * 100).toFixed(0);

  return (
  <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center pt-28">
    <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{policy.title}</h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {policy.description}
        </p>

        {/* Metadata */}
        <div className="text-sm text-gray-600 mb-6 space-y-1">
          <p>
            <strong>Created By:</strong> {policy.createdBy}
          </p>
          <p>{new Date(policy.createdAt).toLocaleString()}</p>
        </div>

        {/* Vote Summary */}
        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Vote Summary</h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
            <div
              className="bg-green-500 h-4 transition-all duration-500"
              style={{ width: `${yesPercentage}%` }}
            ></div>
          </div>

          {/* Vote Numbers */}
          <div className="flex gap-10 text-lg font-medium">
            <p>👍 Yes: {yesVotes}</p>
            <p>👎 No: {noVotes}</p>
            <p>📝 Total: {votes.length}</p>
          </div>
        </div>

        {/* Vote Button */}
        <div className="border-t pt-6 mt-6 flex justify-center">
          <Link
            to={`/policies/${policy.id}/vote`}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Vote Now
          </Link>
        </div>

        {/* Voter Breakdown */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-2xl font-semibold mb-4">Voting Breakdown</h3>

          <div className="flex flex-col gap-4">
            {votes.map((vote) => (
              <div
                key={vote.id}
                className="p-4 bg-gray-50 rounded-xl shadow-sm flex justify-between items-center"
              >
                <p className="font-medium">{vote.voterId}</p>
                <p className="capitalize">Vote: {vote.vote}</p>
                <p className="text-sm text-gray-500">
                  {new Date(vote.votedAt).toLocaleString()}
                </p>
              </div>
            ))}

            {votes.length === 0 && (
              <p className="text-center text-gray-500">No votes yet.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
