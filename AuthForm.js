"use client";
import { useState } from "react";

export default function AuthForm({ type = "login", onSubmit, loading, error }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    ...(type === "signup" ? { name: "" } : {}),
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      {type === "signup" && (
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white rounded py-2 font-semibold"
      >
        {loading ? "Please wait..." : type === "signup" ? "Sign Up" : "Login"}
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
}