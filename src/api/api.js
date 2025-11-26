const BASE_URL = "http://localhost:3000";

export const api = {
  getPolicies: async () => {
    const res = await fetch(`${BASE_URL}/policies`);
    return res.json();
  },

  getPolicyById: async (id) => {
    const res = await fetch(`${BASE_URL}/policies/${id}`);
    return res.json();
  },

  createPolicy: async (data) => {
    const res = await fetch(`${BASE_URL}/policies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  getVoters: async () => {
    const res = await fetch(`${BASE_URL}/voters`);
    return res.json();
  },

  submitVote: async (voteObj) => {
    const res = await fetch(`${BASE_URL}/votes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteObj),
    });
    return res.json();
  },

  getVote: async (policyId, voterId) => {
    const res = await fetch(
      `${BASE_URL}/votes?policyId=${policyId}&voterId=${voterId}`
    );
    return res.json();
  },

  getVotesForPolicy: async (policyId) => {
    const res = await fetch(`${BASE_URL}/votes?policyId=${policyId}`);
    return res.json();
  }
};
