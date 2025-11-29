import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center text-center px-6 py-20">

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm">
        Welcome to the Company Policy Voting System
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Review policies, vote on new proposals, and stay updated on company decisions.  
        Transparent. Simple. Engaging.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          to="/policies"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
        >
          View Policies
        </Link>

        <Link
          to="/create"
          className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl text-lg shadow-md hover:bg-blue-50 transition"
        >
          Create New Policy
        </Link>
      </div>
    </div>
  );
}
