import mongoose from "mongoose";
import CategoryModel from "./category";
import UserModel from "./user";
import StarModel from "./stars";
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    ageRange: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: false,
    },
    link: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      enum: ["film", "series"],
      default: "film",
    },
    shortDesc: {
      type: String,
      trim: true,
      required: true,
    },
    showTime: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    season: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    longDesc: {
      type: String,
      trim: true,
      required: true,
    },
    language: {
      type: String,
      trim: true,
      required: true,
    },
    mainImage: {
      type: String,
      trim: true,
      required: true,
    },
    video: {
      type: String,
      trim: true,
      required: false,
    },
    deskBanner: {
      type: String,
      trim: true,
      required: true,
    },
    mobileBanner: {
      type: String,
      trim: true,
      required: true,
    },
    detailImage: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    priceStatus: {
      type: String,
      default: "price",
      enum: ["price", "free"],
    },
    logo: {
      type: String,
      trim: true,
      required: true,
    },
    director: {
      type: String,
      trim: true,
      required: true,
    },
    IMDB: {
      type: Number,
      default: 5,
    },
    contentType: {
      type: String,
      enum: ["kid", "adult"],
      default: "adult",
    },
    actors: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Stars",
      },
    ],
    isSlider: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.models?.Movie || mongoose.model("Movie", schema);

export default model;
