import mongoose from "mongoose";
import { config } from "dotenv";

config();

const URL = process.env.MONGO_URL;
export async function connectDb() {
  mongoose
    .connect(URL)
    .then(() => console.log(`database connected successfully...`))
    .catch((e) => console.log(e));
}
