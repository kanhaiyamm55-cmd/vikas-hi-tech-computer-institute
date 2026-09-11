import express from "express";
import Admission from "../models/Admission.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, course, mode, message } = req.body;

    if (!name || !phone || !course) {
      return res.status(400).json({
        message: "Name, phone and course are required."
      });
    }

    if (Admission.db.readyState !== 1) {
      return res.status(503).json({
        message: "Database is not connected. Please configure MongoDB."
      });
    }

    const admission = await Admission.create({
      name,
      phone,
      email,
      course,
      mode,
      message
    });

    res.status(201).json({
      message: "Admission enquiry submitted successfully.",
      admission
    });
  } catch (error) {
    res.status(500).json({ message: "Could not submit enquiry." });
  }
});

export default router;
