import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    link: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    parrent: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models?.Category || mongoose.model("Category", schema);

export default model;
