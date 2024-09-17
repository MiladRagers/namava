import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    orderNumber: {
      type: String,
      required: true,
      trim: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pay", "pending"],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Order || mongoose.model("Order", schema);

export default model;
