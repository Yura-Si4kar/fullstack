import { cookies } from "next/headers";
import { checkAuth } from "@/middleware/checkAuth";


export async function GET() {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    return checkAuth(token);
}