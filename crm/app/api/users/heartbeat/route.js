import connectDB from "@/libs/db";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const { userId } = await req.json();  // ✅ правильно читаємо JSON

  if (!userId) {
    return NextResponse.json(
      { error: "No userId provided" },
      { status: 400 }
    );
  }

  await User.findByIdAndUpdate(userId, {
    lastActive: new Date()
  });

  return NextResponse.json(
    { message: "Heartbeat received" },
    { status: 200 }
  );
}