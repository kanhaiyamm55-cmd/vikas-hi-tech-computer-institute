export default function Admin() {
  const cards = [
    ["👥", "Students", "0"],
    ["📚", "Courses", "4"],
    ["📝", "Admissions", "0"],
    ["💳", "Orders", "0"],
    ["🎥", "Lessons", "0"],
    ["🏆", "Certificates", "0"]
  ];

  return (
    <section className="section">
      <p className="eyebrow">Management</p>
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        {cards.map(([icon, title, count]) => (
          <div className="dash-card" key={title}><span>{icon}</span><h3>{title}</h3><strong>{count}</strong><p>Manage {title.toLowerCase()}</p></div>
        ))}
      </div>
      <div className="admin-panel">
        <h2>Admin modules</h2>
        <div className="admin-list">
          <div>Course Management <span>Add • Edit • Delete</span></div>
          <div>Student Management <span>View • Search • Status</span></div>
          <div>Admission Enquiries <span>New • Contacted • Closed</span></div>
          <div>Orders & Payments <span>Pending • Paid • Failed</span></div>
        </div>
      </div>
    </section>
  );
}
