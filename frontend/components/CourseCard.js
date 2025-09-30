import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded shadow p-4 bg-white flex flex-col h-full">
      <h3 className="text-lg font-bold mb-1">{course.title}</h3>
      <div className="text-sm mb-2 text-gray-600">{course.category}</div>
      <div className="flex-grow">{course.description}</div>
      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold text-blue-600">${course.price}</span>
        <Link
          href={`/courses/${course.id}`}
          className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
        >
          View
        </Link>
      </div>
    </div>
  );
}