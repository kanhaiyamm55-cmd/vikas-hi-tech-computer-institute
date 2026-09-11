import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import courseRoutes from "./routes/courseRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Vikas Hi Tech Computer Institute API is running!",
    status: "success"
  });
});

app.use("/api/courses", courseRoutes);
app.use("/api/admissions", admissionRoutes);

async function startServer() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } else {
      console.log("MongoDB URI not configured. API is running without database.");
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error.message);
    process.exit(1);
  }
}

startServer();
