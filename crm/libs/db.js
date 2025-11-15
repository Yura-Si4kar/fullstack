import mongoose from "mongoose";

const DB_URI = process.env.MongoDB_URI;

if(!DB_URI) {
    throw new Error("MongoDB_URI is not defined in environment variables");
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

const cached = global.mongoose;

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  } 

  if (!cached.promise) {
    cached.promise = mongoose.connect(DB_URI, {
      bufferCommands: false,
    }).then((mongooseInstance) => {
      console.log('✅ Connected to MongoDB');
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
