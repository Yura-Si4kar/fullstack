// src/middleware/checkAuth.js
import { verifyToken } from "@/libs/jwt";
import { NextResponse } from "next/server";


export async function checkAuth(token) {
  // Перевірка наявності токена
  if (!token) {
    return NextResponse.json(
      { message: "Відсутній токен", isAuth: false, user: null },
      { status: 401 }
    );
  }

  // Верифікація токена
  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { message: "Неавторизований доступ", isAuth: false, user: null },
      { status: 403 }
    );
  }

  // Якщо все добре — повертаємо дані користувача
  return NextResponse.json(
    { message: "Успішний вхід", isAuth: true, user: payload },
    { status: 200 }
  );
}
