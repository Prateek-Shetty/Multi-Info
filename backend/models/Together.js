import mongoose from "mongoose";

const TogetherSchema = new mongoose.Schema({
  sports: Object,
  news: Array,
  youtube: Array,
  stock: Object,
  weather: Object,
  summary: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Together", TogetherSchema);
