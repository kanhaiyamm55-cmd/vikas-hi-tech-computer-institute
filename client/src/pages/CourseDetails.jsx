import { Link, useParams } from "react-router-dom";
import { courses } from "../data.js";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((item) => item._id === id);

  if (!course) return <section className="section"><h1>Course not found</h1><Link to="/courses">Back to Courses</Link></section>;

  return (
    <section className="section">
      <div className="details">
        <div>
          <p className="eyebrow">{course.category} • {course.mode}</p>
          <h1>{course.title}</h1>
          <p className="lead">{course.description}</p>
          <div className="stats">
            <div><b>Duration</b><span>{course.duration}</span></div>
            <div><b>Instructor</b><span>{course.instructor}</span></div>
            <div><b>Mode</b><span>{course.mode}</span></div>
          </div>
          <h2>What you will learn</h2>
          <ul className="check-list">
            <li>Practical computer skills</li>
            <li>Industry-relevant concepts</li>
            <li>Hands-on project practice</li>
            <li>Career guidance and support</li>
          </ul>
          <Link className="btn primary" to={course.mode === "offline" ? "/admission" : "/login"}>
            {course.mode === "offline" ? "Apply for Admission" : "Enroll / Login"}
          </Link>
        </div>
        <aside className="details-card">
          <img src="/assets/institute-poster.jpg" alt="Institute" />
          {course.price > 0 ? <h2>₹{course.price.toLocaleString("en-IN")}</h2> : <h2>Contact Institute</h2>}
          <p>Fees and batch details can be confirmed with the institute.</p>
          <Link className="btn secondary full" to="/contact">Contact Us</Link>
        </aside>
      </div>
    </section>
  );
}
