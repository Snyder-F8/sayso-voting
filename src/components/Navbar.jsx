import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyle =
    "px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition";

  const activeStyle =
    "px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600";

  return (
    <nav className="bg-white shadow-md w-full px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
        PolicyVote
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          Home
        </NavLink>

        <NavLink
          to="/policies"
          className={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          Policies
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          Create Policy
        </NavLink>
      </div>
    </nav>
  );
}
