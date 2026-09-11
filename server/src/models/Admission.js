import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    course: { type: String, required: true },
    mode: { type: String, enum: ["online", "offline"], default: "offline" },
    message: { type: String, default: "" },
    status: { type: String, default: "New" }
  },
  { timestamps: true }
);

export default mongoose.model("Admission", admissionSchema);
