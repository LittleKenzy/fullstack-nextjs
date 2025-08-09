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

// Cek dulu, kalau model 'Post' sudah ada pakai itu, kalau belum buat baru
const Post = models.Post || mongoose.model('Post', postSchema);

export default Post;
