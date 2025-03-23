import mongoose from "mongoose";
import { productSchema } from "../schemas/productSchema.js";

export const productModel =
  mongoose.models.products || mongoose.model("product", productSchema);
