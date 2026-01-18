import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import { User } from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({}, "-password"); // виключаємо пароль
    const now = new Date();
    const OFFLINE_TIME = 5 * 60 * 1000; // 5 хв

    const usersWithStatus = users.map(u => ({
      _id: u._id,
      name: u.name,
      email: u.email,
      role: u.role,
      avatar: u.avatar,
      online: now - u.lastActive < OFFLINE_TIME
    }));

    return NextResponse.json(usersWithStatus, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні користувачів:", error);
    return NextResponse.json(
      { message: "Помилка при отриманні користувачів" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const { userId } = await request.json();
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return NextResponse.json(
        { message: "Користувача не знайдено" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Користувача видалено", userId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Помилка при видаленні користувача:", error);
    return NextResponse.json(
      { message: "Помилка при видаленні користувача" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const { userId, ...updateData } = await request.json();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, fields: "-password" }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: "Користувача не знайдено" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Користувача оновлено", user: updatedUser },
      { status: 200 }
    );

  } catch (error) {
    console.error("Помилка при оновленні користувача:", error);
    return NextResponse.json(
      { message: "Помилка при оновленні користувача" },
      { status: 500 }
    );
  }
}