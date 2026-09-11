export const courses = [
  {
    _id: "demo-bca",
    title: "BCA – Bachelor of Computer Applications",
    description: "3-year graduation course with practical, industry-relevant computer education.",
    category: "Graduation",
    mode: "offline",
    duration: "3 Years",
    price: 0,
    instructor: "Expert Faculty"
  },
  {
    _id: "demo-web",
    title: "Full Stack Web Development",
    description: "Learn frontend, backend, databases and build real-world web applications.",
    category: "Development",
    mode: "both",
    duration: "6 Months",
    price: 9999,
    instructor: "Industry Expert"
  },
  {
    _id: "demo-office",
    title: "Advanced Computer & MS Office",
    description: "Practical training in computer fundamentals, Word, Excel, PowerPoint and office productivity.",
    category: "Computer Basics",
    mode: "both",
    duration: "3 Months",
    price: 2999,
    instructor: "Expert Faculty"
  },
  {
    _id: "demo-dca",
    title: "DCA – Diploma in Computer Applications",
    description: "Practical computer application course for students, job seekers and beginners.",
    category: "Diploma",
    mode: "both",
    duration: "6 Months",
    price: 4999,
    instructor: "Expert Faculty"
  }
];

export async function getCourses() {
  try {
    const response = await fetch("http://localhost:5000/api/courses");
    if (!response.ok) throw new Error("API unavailable");
    return await response.json();
  } catch {
    return courses;
  }
}
