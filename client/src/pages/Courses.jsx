import { Link } from "react-router-dom";
import { courses } from "../data.js";
import { useMemo, useState } from "react";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("all");

  const filtered = useMemo(() => courses.filter((course) => {
    const matchesText = course.title.toLowerCase().includes(query.toLowerCase());
    const matchesMode = mode === "all" || course.mode === mode || course.mode === "both";
    return matchesText && matchesMode;
  }), [query, mode]);

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Learn With Us</p>
        <h1>Courses</h1>
        <p>Explore online and offline computer education programs.</p>
      </div>

      <div className="filters">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses..." />
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="all">All Modes</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="course-grid">
        {filtered.map((course) => (
          <article className="course-card" key={course._id}>
            <div className="course-top"><span>{course.category}</span><b>{course.mode}</b></div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta"><span>⏱ {course.duration}</span><span>👨‍🏫 {course.instructor}</span></div>
            {course.price > 0 && <strong className="price">₹{course.price.toLocaleString("en-IN")}</strong>}
            <Link className="btn primary full" to={`/courses/${course._id}`}>View Course</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
