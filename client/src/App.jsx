import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Admission from "./pages/Admission.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";

function Layout({ children }) {
  return (
    <>
      <header className="navbar">
        <Link className="brand" to="/">
          <span className="brand-mark">VH</span>
          <span>Vikas Hi Tech</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/contact">Contact</Link>
          <Link className="login-btn" to="/login">Login</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <h3>Vikas Hi Tech Computer Institute</h3>
          <p>Skill सीखो – Future बनाओ</p>
          <p>Nagar Panchayat Rampur</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/courses">Online Courses</Link>
          <Link to="/admission">Offline Admission</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Learning Modes</h4>
          <p>Online Courses</p>
          <p>Offline Classes</p>
          <p>Practical Training</p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Layout>
  );
}
