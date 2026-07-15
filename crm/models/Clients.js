import mongoose from "mongoose";

const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'lead', 'active', 'inactive', 'closed'],
      default: 'new'
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    lastActive: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export const Client =
  mongoose.models.Client || mongoose.model("Client", clientSchema);