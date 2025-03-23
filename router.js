import express from "express";
import { test } from "./router/test.js";
import { topCollection } from "./router/topCollection.js";

export const Router = express.Router();

Router.get("/test", test);

//top collection
Router.post("/topCollection", topCollection);
