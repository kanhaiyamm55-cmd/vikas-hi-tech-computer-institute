import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="section">
      <p className="eyebrow">Student Area</p>
      <h1>My Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dash-card"><span>📚</span><h3>My Courses</h3><strong>0</strong><p>Enrolled courses</p></div>
        <div className="dash-card"><span>▶️</span><h3>Continue Learning</h3><strong>0%</strong><p>Overall progress</p></div>
        <div className="dash-card"><span>🏆</span><h3>Certificates</h3><strong>0</strong><p>Completed courses</p></div>
        <div className="dash-card"><span>🧾</span><h3>Orders</h3><strong>0</strong><p>Purchase history</p></div>
      </div>
      <div className="empty-state">
        <h2>Your learning journey starts here.</h2>
        <p>Purchase an online course to see lessons and progress in this dashboard.</p>
        <Link className="btn primary" to="/courses">Explore Courses</Link>
      </div>
    </section>
  );
}
