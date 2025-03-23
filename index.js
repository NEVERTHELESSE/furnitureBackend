import express from "express";
import cors from "cors";
import { Router } from "./router.js";
import { connectDb } from "./database/connectDb.js";

const app = express();
const port = 9000;

connectDb();

app.use(cors());
app.use(express.json());
app.use("/api", Router);

console.clear();

app.listen(port, () => console.log(`server running on port ${port}....`));
