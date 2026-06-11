import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI!;

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGO_URI);

    console.log(" MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}
