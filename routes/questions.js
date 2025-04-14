import express from "express";
const router = express.Router();
import Question from "../models/question.model.js";
import Category from "../models/category.model.js";
import { Types } from "mongoose";

router.get("/:category", async (req, res, next) => {
  const { number, difficulty } = req.query;
  const category = req.params.category;
  const categoryData = await Category.findById(category).lean();

  if (!number || !category || !difficulty) {
    return res.status(400).json({ error: "All parameters are required" });
  }

  const filter = {};

  if (categoryData.category !== "Any")
    filter.category = new Types.ObjectId(category);
  if (difficulty !== "any") filter.difficulty = difficulty;

  try {
    const quiz = await Question.aggregate([
      {
        $match: filter,
      },
      {
        $sample: { size: Number(number) },
      },
    ]);

    return res.status(200).json({ ...categoryData, quiz });
  } catch (err) {
    next(err);
  }
});

export default router;
