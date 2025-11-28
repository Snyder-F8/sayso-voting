import { Link } from "react-router-dom";

export default function PolicyCard({ policy }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 hover:-translate-y-1">
      <h2 className="text-2xl font-semibold mb-3">{policy.title}</h2>

      <p className="text-gray-700 mb-4 line-clamp-3">{policy.description}</p>

      <div className="text-sm text-gray-500 space-y-1 mb-4">
        <p>
          <span className="font-medium text-gray-600">Created By:</span>{" "}
          {policy.createdBy}
        </p>
        <p>{new Date(policy.createdAt).toLocaleString()}</p>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/policies/${policy.id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          View Details
        </Link>
        <Link
          to={`/vote/${policy.id}`}
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Vote
        </Link>
      </div>
    </div>
  );
}
