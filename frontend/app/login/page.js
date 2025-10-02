"use client";
import AuthForm from "../../components/AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/authSlice";
import axios from "axios";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogin({ email, password }) {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, password }
      );
      dispatch(setAuth({ user: res.data.user, token: res.data.token }));
      if (typeof window !== "undefined")
        localStorage.setItem("ziya_lms_jwt", res.data.token);
      router.push("/courses");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <AuthForm type="login" onSubmit={handleLogin} loading={loading} error={error} />
    </div>
  );
}
