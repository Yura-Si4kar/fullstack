import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import models from "@/models/User";
import bcrypt from "bcrypt";
import { generateToken } from "@/libs/jwt";
const { User } = models;

export async function POST(request) {
  const { email, password } = await request.json();
  // Підключення до бази даних
  await connectDB();
  // Пошук користувача за email
  const user = await User.findOne({ email });
  // Перевірка, чи існує користувач
  if (!user) {
    return new Response(
      JSON.stringify({ error: 'Користувача не знайдено' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
  // Перевірка пароля
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return new Response(
      JSON.stringify({ error: 'Невірний пароль' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  // Генерація JWT токена
  const token = generateToken({ id: user._id, email: user.email, role: user.role });
  // Відправка відповіді з токеном у cookie
  const response = NextResponse.json({ message: "Успішний вхід", isAuth: true, user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar } }, { status: 200 });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 день
    path: "/",
  });

  return response;
}