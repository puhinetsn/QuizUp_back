import express from "express";
const router = express.Router();
import Category from "../models/category.model.js";

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find().lean();
    return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

export default router;
