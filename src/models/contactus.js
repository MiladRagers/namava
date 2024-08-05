import mongoose from "mongoose";
import DepartmentModel from "@/src/models/department";

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Contact || mongoose.model("Contact", schema);

export default model;
