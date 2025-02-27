import mongoose from "mongoose";
import Category from "./category.model.js";
const { Schema, model } = mongoose;

const questionSchema = new Schema({
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: Category.modelName,
  },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: { type: [String], required: true },
});

const Question = model("Question", questionSchema);
export default Question;
