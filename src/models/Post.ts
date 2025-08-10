import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

export default models.Post || mongoose.model("Post", postSchema);
