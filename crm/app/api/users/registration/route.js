import { NextResponse } from "next/server";
import { User } from "@/models/User";
import connectDB from "@/libs/db";
import bcrypt from "bcrypt";

export async function POST(request) {
    const { name, email, password, role, avatar } = await request.json();
    // Підключення до БД
    try {
        await connectDB();
    } catch (error) {
        console.error("Помилка підключення до БД:", error);
        return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
    }
    // Перевірка, чи існує користувач з таким email
    let existingUser;
    
    try {
        existingUser = await User.findOne({ email }); 
    } catch (error) {
        console.error("Помилка пошуку користувача:", error);
        return NextResponse.json({ error: "Помилка перевірки email" }, { status: 500 });
    }
    
    if (existingUser ) {
        return NextResponse.json(
            { error: "Користувач з таким email вже існує" },
            { status: 400 }
        );
    }

    // Хешування пароля та створення нового користувача
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, avatar });
    await user.save();

  return NextResponse.json(
    {
      message: "Користувача створено успішно",
      user: { _id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar }
    },
    { status: 201 }
  );
}