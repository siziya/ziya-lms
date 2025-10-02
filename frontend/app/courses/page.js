"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
        setCourses(res.data);
      } catch (e) {
        setCourses([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      <input
        className="border rounded px-2 py-1 mb-4 w-full max-w-md"
        placeholder="Search courses..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : filtered.length ? (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div>No courses found.</div>
      )}
    </div>
  );
}
