import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const handle = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => nav("/"))
      .catch(e => setErr(e.message));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handle}>
        <input type="email" className="w-full p-2 border" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <p className="text-red-500">{err}</p>}
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Log In</button>
      </form>
      <p className="mt-4">Don't have an account? <Link to="/register" className="underline">Register</Link>.</p>
    </div>
  );
}
