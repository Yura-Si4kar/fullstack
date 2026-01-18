import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    permissions: {
      type: [String],
      default: []
    },
    description: {
      type: String,
      default: ""
    }
  }, { timestamps: true }
);

export const Role =
  mongoose.models.Role || mongoose.model("Role", roleSchema);