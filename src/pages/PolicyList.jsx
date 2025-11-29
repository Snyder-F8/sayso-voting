import { useEffect, useState } from "react";
import { api } from "../api/api";
import PolicyCard from "../components/PolicyCard";

export default function PolicyList() {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    api.getPolicies()
      .then((res) => {
        setPolicies(res); // no .data here
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch policies. Please try again.");
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(policies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentPolicies = policies.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading policies...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">{error}</p>;
  }

  if (!policies.length) {
    return <p className="text-center mt-10 text-gray-600">No policies available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-8 pt-32 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">Company Policies</h1>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {currentPolicies.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
          >
            Previous
          </button>

          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
