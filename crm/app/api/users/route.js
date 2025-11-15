import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import models from "@/models/User";
const { User } = models;

export async function GET() {
  try {
    await connectDB();

    // Отримуємо всіх користувачів
    const users = await User.find({}, "-password"); // виключаємо поле password для безпеки

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні користувачів:", error);
    return NextResponse.json(
      { message: "Помилка при отриманні користувачів" },
      { status: 500 }
    );
  }
}