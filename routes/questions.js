import express from "express";
const router = express.Router();
import Question from "../models/question.model.js";
import Category from "../models/category.model.js";

router.get("/:category", async (req, res, next) => {
  const { number, difficulty, type } = req.query;
  const { category } = req.params;

  if (!number || !category || !difficulty || !type) {
    return res.status(400).json({ error: "All parameters are required" });
  }

  const filter = {};

  if (category !== "any") filter.category = category;
  if (difficulty !== "any") filter.difficulty = difficulty;
  if (type !== "any") filter.type = type;

  try {
    const [quiz, categoryData] = await Promise.all([
      Question.find(filter).limit(Number(number)).lean(),
      Category.findById(filter.category).lean(),
    ]);

    return res.status(200).json({ ...categoryData, quiz });
  } catch (err) {
    next(err);
  }
});

export default router;
