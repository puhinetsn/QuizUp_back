import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/error.middleware.js";
import questionsRouter from "./routes/questions.js";
import categoriesRouter from "./routes/categories.js";

const app = express();

app.use("/api/questions", questionsRouter);
app.use("/api/categories", categoriesRouter);

app.use(errorHandler);

mongoose.connect(
  "mongodb+srv://puhinetsn82:-gt9Gx4R.wZKVXg@clusterpuhinets.hjgmsud.mongodb.net/quizUp?retryWrites=true&w=majority&appName=ClusterPuhinets"
);

app.listen(3000, () => console.log("Server ready"));
