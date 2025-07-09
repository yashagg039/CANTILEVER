import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">News Buddy</Link>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Hi, {user.email}</span>
          <button
            className="bg-red-600 px-3 py-1 rounded"
            onClick={() => signOut(auth).then(() => navigate("/"))}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="underline">Login</Link>
          <Link to="/register" className="underline">Register</Link>
        </div>
      )}
    </header>
  );
}
