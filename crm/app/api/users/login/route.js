import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import bcrypt from "bcrypt";
import { generateToken } from "@/libs/jwt";
import { User } from "@/models/User";

export async function POST(request) {
  const { email, password } = await request.json();

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'Користувача не знайдено' }, { status: 404 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: 'Невірний пароль' }, { status: 401 });
  }

  const token = generateToken({ _id: user._id, email: user.email, role: user.role });

  const response = NextResponse.json({
    message: "Успішний вхід",
    isAuth: true,
    user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar }
  });

  console.log("Generated Token:", token); // Логування токена для налагодження

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 день
    path: "/"
  });

  return response;
}