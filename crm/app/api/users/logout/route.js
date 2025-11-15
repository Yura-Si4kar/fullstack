import { NextResponse } from "next/server";

export async function POST() {
  // Очищаємо токен у cookie
  const response = NextResponse.json({ message: "Успішний вихід", isAuth: false, user: null }, { status: 200 });

  response.cookies.set("token", "", {
    httpOnly: true,              // токен доступний лише на сервері
    secure: process.env.NODE_ENV === "production", 
    maxAge: 0,                    // видаляємо cookie
    path: "/",                     // шлях cookie
  });

  return response;
}
