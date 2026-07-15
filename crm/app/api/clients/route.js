import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import { Client } from "@/models/Clients";
import { User } from "@/models/User";

export async function GET() { 
    try {
        await connectDB();
        
        // .lean() перетворює документи Mongoose на звичайні JS об'єкти
        const clients = await Client.find().lean();
        const users = await User.find({}, "-password").lean();

        const clientsWithOwnerAndCreator = clients.map((client) => {
            // Знаходимо потрібні об'єкти
            const ownerUser = users.find((user) => user._id.toString() === client.owner?.toString());
            const creatorUser = users.find((user) => user._id.toString() === client.createdBy?.toString()); // Зверни увагу, у твоїй формі було createdBy, перевір модель

            // Повертаємо новий об'єкт (або розгортаємо старий)
            return {
                ...client,
                owner: ownerUser.name || null,
                createdBy: creatorUser.name || null
            };
        });
            
        return NextResponse.json(clientsWithOwnerAndCreator, { status: 200 });
    } catch (error) { 
        console.error("Помилка при отриманні клієнтів:", error);
        return NextResponse.json(
            { message: "Помилка при отриманні клієнтів" },
            { status: 500 }
        );
    }
}