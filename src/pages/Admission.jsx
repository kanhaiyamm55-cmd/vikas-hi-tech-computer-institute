import { useState } from "react";

export default function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", mode: "offline", message: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } catch {}
    setSubmitted(true);
  }

  return (
    <section className="section narrow">
      <div className="section-heading">
        <p className="eyebrow">Admissions Open</p>
        <h1>Admission / Course Enquiry</h1>
        <p>Fill the form and the institute team can contact you.</p>
      </div>

      {submitted ? (
        <div className="success-box">
          <h2>Enquiry submitted ✓</h2>
          <p>Thank you. Your enquiry has been recorded on this demo application.</p>
          <button className="btn primary" onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      ) : (
        <form className="form-card" onSubmit={submit}>
          <label>Name<input name="name" value={form.name} onChange={update} required /></label>
          <label>Phone<input name="phone" value={form.phone} onChange={update} required /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={update} /></label>
          <label>Course
            <select name="course" value={form.course} onChange={update} required>
              <option value="">Select a course</option>
              <option>BCA</option><option>DCA</option><option>Full Stack Web Development</option><option>Advanced Computer & MS Office</option>
            </select>
          </label>
          <label>Learning Mode
            <select name="mode" value={form.mode} onChange={update}>
              <option value="offline">Offline Classes</option>
              <option value="online">Online Course</option>
            </select>
          </label>
          <label>Message<textarea name="message" value={form.message} onChange={update} rows="4" /></label>
          <button className="btn primary full">Submit Enquiry</button>
        </form>
      )}
    </section>
  );
}
