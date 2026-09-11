import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

const demoCourses = [
  {
    _id: "demo-bca",
    title: "BCA – Bachelor of Computer Applications",
    description: "3-year graduation course with practical, industry-relevant computer education.",
    category: "Graduation",
    mode: "offline",
    duration: "3 Years",
    price: 0,
    instructor: "Expert Faculty",
    image: "/assets/institute-poster.jpg"
  },
  {
    _id: "demo-web",
    title: "Full Stack Web Development",
    description: "Learn frontend, backend, databases and build real-world web applications.",
    category: "Development",
    mode: "both",
    duration: "6 Months",
    price: 9999,
    instructor: "Industry Expert",
    image: "/assets/institute-poster.jpg"
  },
  {
    _id: "demo-office",
    title: "Advanced Computer & MS Office",
    description: "Practical training in computer fundamentals, Word, Excel, PowerPoint and office productivity.",
    category: "Computer Basics",
    mode: "both",
    duration: "3 Months",
    price: 2999,
    instructor: "Expert Faculty",
    image: "/assets/institute-poster.jpg"
  }
];

router.get("/", async (req, res) => {
  try {
    if (mongooseConnectionReady()) {
      const courses = await Course.find().sort({ createdAt: -1 });
      return res.json(courses);
    }
    res.json(demoCourses);
  } catch {
    res.json(demoCourses);
  }
});

router.get("/:id", async (req, res) => {
  const course = demoCourses.find((item) => item._id === req.params.id);
  if (course) return res.json(course);

  try {
    const dbCourse = await Course.findById(req.params.id);
    if (!dbCourse) return res.status(404).json({ message: "Course not found" });
    res.json(dbCourse);
  } catch {
    res.status(404).json({ message: "Course not found" });
  }
});

function mongooseConnectionReady() {
  return Course.db.readyState === 1;
}

export default router;
