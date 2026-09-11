import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, default: "Computer Courses" },
    mode: { type: String, enum: ["online", "offline", "both"], default: "both" },
    duration: { type: String, default: "3 Months" },
    price: { type: Number, required: true },
    instructor: { type: String, default: "Expert Faculty" },
    image: { type: String, default: "/assets/institute-poster.jpg" }
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
