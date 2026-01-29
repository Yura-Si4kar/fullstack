import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import { Role } from "@/models/Roles";

export async function GET() {
    // Підключення до БД
    try {
      await connectDB();
    } catch (error) {
        console.error("Помилка підключення до БД:", error);
        return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
    }
    // Отримання списку ролей
    let roles;
    try {
        roles = await Role.find({});
    } catch (error) {
        console.error("Помилка отримання ролей:", error);
        return NextResponse.json({ error: "Помилка отримання ролей" }, { status: 500 });
    }
    return NextResponse.json({ roles }, { status: 200 });
}

export async function POST(request) {
  try {
    const { name, permissions = [], description = "" } = await request.json();

    await connectDB();

    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return NextResponse.json(
        { error: "Роль з таким ім'ям вже існує" },
        { status: 400 }
      );
    }

    const role = await Role.create({
      name,
      permissions,
      description,
    });

    return NextResponse.json(
      {
        message: "Роль створена успішно",
        role,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /roles error:", error);
    return NextResponse.json(
      { error: "Помилка створення ролі" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { _id, name, permissions, description } = await request.json();

    await connectDB();

    console.log("Updating role with ID:", _id);
    const role = await Role.findByIdAndUpdate(
      _id,
      { name, permissions, description },
      { new: true }
    );

    if (!role) {
      return NextResponse.json(
        { error: "Роль не знайдена" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Роль оновлена успішно",
        role,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /roles error:", error);

    return NextResponse.json(
      { error: "Помилка оновлення ролі" },
      { status: 500 }
    );
  }
}