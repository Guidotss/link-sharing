import { UserService } from "@/services";
import { signDocument } from "@/jwt/signDocument";

const userService = new UserService();

export async function POST(req: Request) {
  try {
    const { ...user } = await req.json();
    const newUser = await userService.registerUser(user);
    if (!newUser) {
      return new Response(
        JSON.stringify({
          error: `User with email: ${user.email} already exist`,
          ok: false,
        }),
        {
          status: 400,
        }
      );
    }

    const token = signDocument(newUser.id, newUser.email);

    return new Response(JSON.stringify({ newUser, token, ok: true }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error", ok: false }), {
      status: 500,
    });
  }
}
