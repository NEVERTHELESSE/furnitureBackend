import mongoose from "mongoose";
import { productSchema } from "../schemas/productSchema.js";

export const topCollectionModel =
  mongoose.models.tops || mongoose.model("top", productSchema);
