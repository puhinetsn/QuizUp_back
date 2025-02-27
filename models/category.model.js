import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  category: { type: String, required: true },
  url: { type: String, required: true },
});

const Category = model("Category", categorySchema);
export default Category;
