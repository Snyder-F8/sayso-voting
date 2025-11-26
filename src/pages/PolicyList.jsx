import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Link } from "react-router-dom";

export default function PolicyList() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    api.getPolicies().then(setPolicies);
  }, []);

  return (
    <div className="policy-list">
      <h2>Available Policies</h2>
      {policies.map(policy => (
        <div key={policy.id} className="policy-card">
          <h3>{policy.title}</h3>
          <p>{policy.description.slice(0, 120)}...</p>

          <Link to={`/policies/${policy.id}`}>View More</Link>
        </div>
      ))}
    </div>
  );
}
