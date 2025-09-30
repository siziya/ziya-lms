use client;
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-3 mb-6">
      <Link href="/" className="text-2xl font-bold text-blue-700">Ziya LMS</Link>
      <div className="flex gap-4 items-center">
        <Link href="/courses" className="hover:underline">Courses</Link>
        {user?.role === "instructor" && (
          <Link href="/instructor" className="hover:underline">Instructor</Link>
        )}
        {user?.role === "admin" && (
          <Link href="/admin" className="hover:underline">Admin</Link>
        )}
        {user ? (
          <>
            <Link href="/profile" className="hover:underline">{user.name || "Profile"}</Link>
            <button onClick={() => dispatch(logout())} className="ml-2 px-2 py-1 text-sm bg-red-100 text-red-700 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/signup" className="hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}