const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
      name: {
        type: String
      },
      userId: {
        type: String
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      isActive: {
        type: Boolean
      }
    },
     { timestamps: { createdAt: true, updatedAt: true } }
);
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;