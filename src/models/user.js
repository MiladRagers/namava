import mongoose from "mongoose";
import CategoryModel from "./category";
import ProfileModel from "./profile";
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["USER", "ADMIN"],
      trim: true,
    },
    birthday: {
      type: String,
      trim: true,
    },

    province: {
      type: String,
      trim: true,
    },
    favGenre: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: false,
    },
    biography: {
      type: String,
      required: false,
      trim: true,
    },

    profiles: [
      { type: mongoose.Types.ObjectId, ref: "Profile", required: false },
    ],
  },
  { timestamps: true }
);

const model = mongoose.models?.User || mongoose.model("User", schema);

export default model;
