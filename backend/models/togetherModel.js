import mongoose from "mongoose";

const togetherSchema = new mongoose.Schema(
  {
    sports: { type: Object },
    news: { type: Object },
    youtube: { type: Object },
    stock: { type: Array },
    weather: { type: Object },
    lat: { type: Number },
    lon: { type: Number },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const Together = mongoose.model("Together", togetherSchema);

export default Together;
