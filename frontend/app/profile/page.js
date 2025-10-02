"use client";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-2">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Role:</strong> {user.role}
        </div>
      </div>
    </div>
  );
}
