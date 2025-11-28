// src/api/api.js

const BASE_URL = "http://localhost:3000";

export const api = {
  /* ============================================================
   * POLICIES
   * ============================================================ */
  getPolicies: async () => {
    const res = await fetch(`${BASE_URL}/policies`);
    if (!res.ok) throw new Error("Failed to fetch policies");
    return res.json();
  },

  getPolicyById: async (id) => {
    const res = await fetch(`${BASE_URL}/policies/${id}`);
    if (!res.ok) throw new Error("Failed to fetch policy");
    return res.json();
  },

  createPolicy: async (policy) => {
    const res = await fetch(`${BASE_URL}/policies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(policy),
    });

    if (!res.ok) throw new Error("Failed to create policy");
    return res.json();
  },

  /* ============================================================
   * VOTES
   * ============================================================ */
  getVotesForPolicy: async (policyId) => {
    const res = await fetch(`${BASE_URL}/votes?policyId=${policyId}`);
    if (!res.ok) throw new Error("Failed to fetch votes");
    return res.json();
  },

  getVote: async (policyId, voterId) => {
    const res = await fetch(
      `${BASE_URL}/votes?policyId=${policyId}&voterId=${encodeURIComponent(
        voterId
      )}`
    );
    if (!res.ok) throw new Error("Failed to fetch vote");
    return res.json();
  },

  submitVote: async (voteObj) => {
    const res = await fetch(`${BASE_URL}/votes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteObj),
    });

    if (!res.ok) throw new Error("Failed to submit vote");
    return res.json();
  },

  /**
   * Add vote to policy – used by VotePage
   */
  addVoteToPolicy: async (policyId, voterId, vote) => {
    const voteObj = {
      policyId,
      voterId,
      vote,
      votedAt: new Date().toISOString(),
    };

    const res = await fetch(`${BASE_URL}/votes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteObj),
    });

    if (!res.ok) throw new Error("Failed to add vote");
    return res.json();
  },

  /* ============================================================
   * VOTERS (Optional)
   * ============================================================ */
  getVoters: async () => {
    const res = await fetch(`${BASE_URL}/voters`);
    if (!res.ok) throw new Error("Failed to fetch voters");
    return res.json();
  },

  createVoter: async (voter) => {
    const res = await fetch(`${BASE_URL}/voters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voter),
    });

    if (!res.ok) throw new Error("Failed to create voter");
    return res.json();
  },
};
