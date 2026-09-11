import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  function submit(e) {
    e.preventDefault();
    navigate(role === "admin" ? "/admin" : "/dashboard");
  }

  return (
    <section className="section narrow">
      <div className="form-card">
        <p className="eyebrow">Student Portal</p>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <label>Email<input type="email" required placeholder="student@example.com" /></label>
          <label>Password<input type="password" required placeholder="••••••••" /></label>
          <label>Login as
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="admin">Admin (demo)</option>
            </select>
          </label>
          <button className="btn primary full">Login</button>
        </form>
        <p className="small">New student? Registration can be added in the next development step.</p>
        <Link to="/courses">← Browse Courses</Link>
      </div>
    </section>
  );
}
