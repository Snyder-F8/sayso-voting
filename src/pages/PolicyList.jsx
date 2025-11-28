import { useEffect, useState } from "react";
import { api } from "../api/api";
import PolicyCard from "../components/PolicyCard";

export default function PolicyList() {
  const [policies, setPolicies] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    api
      .getPolicies()
      .then((res) => setPolicies(res.data)) // important: use res.data
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(policies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentPolicies = policies.slice(startIndex, startIndex + itemsPerPage);

  if (!policies.length)
    return <p className="text-center mt-10 text-gray-600">No policies available.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Company Policies</h1>

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
