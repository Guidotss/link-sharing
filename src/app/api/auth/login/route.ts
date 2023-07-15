import { signDocument } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const user = await userService.loginUser(email, password);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const token = signDocument(user.id, user.email);
    const { password: dbPassword, ...userData } = user;
    return new Response(JSON.stringify({ user: userData, token }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
