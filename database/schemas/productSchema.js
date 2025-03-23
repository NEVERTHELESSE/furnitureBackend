import mongoose from "mongoose";

export const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    imageUrl: {
      type: [String],
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);
