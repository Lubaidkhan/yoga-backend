const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  userId: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  description: {
    type: String
  },
  isActive: {
    type: Boolean
  },
    },
     { timestamps: { createdAt: true, updatedAt: true } }
);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;