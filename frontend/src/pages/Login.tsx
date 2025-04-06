import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // same as backend 'username'
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://shiksha-darpan.onrender.com/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      console.log("Login successful:", res.data);
      navigate("/"); 
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div
      className="min-w-screen min-h-screen flex justify-center items-center"
      style={{
        background: "#34265B",
        color: "#fff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-10 rounded-xl w-full max-w-md shadow-lg"
        style={{
          background: "#fff",
          color: "#333",
        }}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-500 mb-3 text-sm text-center">{error}</p>
        )}

        <input
          className="p-3 mb-3 rounded border"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="p-3 mb-3 rounded border"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="p-3 rounded font-semibold"
          style={{
            backgroundColor: "#000000",
            color: "#fff",
          }}
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-black">
          Don’t have an account?{" "}
          <a href="/register" className="underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
