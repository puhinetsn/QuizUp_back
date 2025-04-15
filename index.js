import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/error.middleware.js";
import questionsRouter from "./routes/questions.js";
import categoriesRouter from "./routes/categories.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/questions", questionsRouter);
app.use("/api/categories", categoriesRouter);

app.use(errorHandler);

mongoose.connect(process.env.DATABASE_URL);

app.listen(3000, () => console.log("Server ready"));
