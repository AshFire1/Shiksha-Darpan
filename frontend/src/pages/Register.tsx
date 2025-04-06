import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState(""); // 'username' in backend
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/signup", {
        username,
        password,
        name,
      });

      console.log("Registration successful:", res.data);
      // You can store token in localStorage if needed: localStorage.setItem("token", res.data.token);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
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
        <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>

        {error && (
          <p className="text-red-500 mb-3 text-sm text-center">{error}</p>
        )}

        <input
          className="p-3 mb-3 rounded border"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <input
          className="p-3 mb-3 rounded border"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Register
        </button>

        <p className="mt-4 text-center text-sm text-black">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
