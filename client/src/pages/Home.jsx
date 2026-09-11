import { Link } from "react-router-dom";
import { courses } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">10+ Years of Excellence • 100+ Computers in Lab</p>
          <h1>Learn Skills.<br /><span>Build Your Future.</span></h1>
          <p>
            Professional computer education with practical training,
            expert faculty, online courses and offline classroom learning.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/courses">Explore Courses</Link>
            <Link className="btn secondary" to="/admission">Apply for Admission</Link>
          </div>
        </div>
        <div className="hero-card">
          <img src="/assets/institute-poster.jpg" alt="Vikas Hi Tech Computer Institute poster" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Choose Your Learning Mode</p>
          <h2>Learn Online or at Our Institute</h2>
        </div>
        <div className="mode-grid">
          <article className="feature-card">
            <div className="icon">🌐</div>
            <h3>Online Learning</h3>
            <p>Buy courses online and learn at your own pace from your student dashboard.</p>
            <Link to="/courses">View Online Courses →</Link>
          </article>
          <article className="feature-card">
            <div className="icon">🏫</div>
            <h3>Offline Classes</h3>
            <p>Join practical classroom training at our institute in Nagar Panchayat Rampur.</p>
            <Link to="/admission">Start Admission →</Link>
          </article>
          <article className="feature-card">
            <div className="icon">💻</div>
            <h3>Practical Training</h3>
            <p>Hands-on computer lab practice designed for skills, jobs and career growth.</p>
            <Link to="/about">Why Choose Us →</Link>
          </article>
        </div>
      </section>

      <section className="section light">
        <div className="section-heading">
          <p className="eyebrow">Popular Programs</p>
          <h2>Featured Courses</h2>
        </div>
        <div className="course-grid">
          {courses.slice(0, 3).map((course) => (
            <article className="course-card" key={course._id}>
              <div className="course-top"><span>{course.category}</span><b>{course.mode}</b></div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta"><span>⏱ {course.duration}</span><span>👨‍🏫 {course.instructor}</span></div>
              <Link className="text-btn" to={`/courses/${course._id}`}>View Details →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to start learning?</h2>
        <p>Choose an online course or submit an offline admission enquiry today.</p>
        <Link className="btn primary" to="/courses">Get Started</Link>
      </section>
    </>
  );
}
