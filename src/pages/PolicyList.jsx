import { useEffect, useState } from "react";
import { api } from "../api/api";



export default function PolicyList() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    api.getPolicies().then(setPolicies);
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;


  const totalPages = Math.ceil(policies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentPolicies = policies.slice(startIndex, startIndex + itemsPerPage);


  return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold mb-4">Company Policies</h1>


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-5xl">
          {currentPolicies.map((policy) => (
              <a href={`/policies/${policy.id}`} key={policy.id} className="rounded-2xl shadow-md hover:shadow-lg transition p-4 cursor-pointer">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{policy.title}</h2>
                  <p className="text-gray-700 mb-4">{policy.description}</p>
                  <p className="text-sm text-gray-500">Created By: {policy.createdBy}</p>
                  <p className="text-sm text-gray-500">{new Date(policy.createdAt).toLocaleString()}</p>
                </div>

              </a>
          ))}
        </div>


        <div className="flex items-center gap-4 mt-4">
          <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-2xl"
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>
          <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-2xl"
          >
            Next
          </button>
        </div>
      </div>
  );
}
