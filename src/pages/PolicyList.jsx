import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";

export default function PolicyList() {
  const [policies, setPolicies] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    api.getPolicies().then(setPolicies);
  }, []);

  const totalPages = Math.ceil(policies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentPolicies = policies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Company Policies</h1>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {currentPolicies.map((policy) => (
          <Link
            to={`/policies/${policy.id}`}
            key={policy.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold mb-3">{policy.title}</h2>

            <p className="text-gray-700 mb-4 line-clamp-3">
              {policy.description}
            </p>

            <div className="text-sm text-gray-500 space-y-1">
              <p>
                <span className="font-medium text-gray-600">Created By:</span>{" "}
                {policy.createdBy}
              </p>
              <p>{new Date(policy.createdAt).toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
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
    </div>
  );
}
