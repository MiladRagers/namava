import mongoose from "mongoose";
import MovieModel from "./movie";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    link: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    season: {
      type: mongoose.Types.ObjectId,
      ref: "Season",
    },
    series: { type: mongoose.Types.ObjectId, ref: "Movie" },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models?.Episode || mongoose.model("Episode", schema);

export default model;
