const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  priorityNo: {
    type: Number
  },
  userId: {
    type: String,
    required:true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  isActive: {
    type: Boolean
  },
    },
     { timestamps: { createdAt: true, updatedAt: true } }
);
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;