import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  value: { type: String, required: "Kindly enter the name of the task" },
  done: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Todo", TodoSchema);
