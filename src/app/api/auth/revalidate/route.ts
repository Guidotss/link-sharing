import { signDocument, verifyToken } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token)
    return new Response(JSON.stringify({ ok: false }), {
      status: 401,
      statusText: "Unauthorized",
    });
  try {
    const { id } = (await verifyToken(token)) as { id: string };
    if (!id)
      return new Response(JSON.stringify({ ok: false }), {
        status: 401,
        statusText: "Unauthorized",
      });
    const user = await userService.getUserById(id);
    if (!user)
      return new Response(JSON.stringify({ ok: false }), {
        status: 401,
        statusText: "Unauthorized",
      });

    const newToken = signDocument(user.id, user.email);
    return new Response(JSON.stringify({ ok: true, token: newToken, user }), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return { status: 500, body: { message: "Unauthorized" } };
  }
}
