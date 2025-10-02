"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);
        setCourse(res.data);
      } catch (e) {
        setCourse(null);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchCourse();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <div className="mb-2 text-gray-600">{course.category}</div>
      <div className="mb-4">{course.description}</div>
      <div className="mb-4 font-semibold text-blue-700">Price: ${course.price}</div>
      <div>
        <h3 className="font-bold mb-2">Topics</h3>
        <ul className="list-disc pl-6">
          {course.topics?.length ? (
            course.topics.map((topic, i) => (
              <li key={i}>{topic.title}</li>
            ))
          ) : (
            <li>No topics yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
