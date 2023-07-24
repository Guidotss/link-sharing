import { UserService } from "@/services";

const userService = new UserService();

export async function GET(req: Request) {
  const userId = req.url.split("/")[5];
  if (!userId)
    return new Response(JSON.stringify({ ok: false, message: "Bad request" }), {
      status: 400,
    });

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return new Response(
        JSON.stringify({ ok: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ ok: true, user }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" })
    );
  }
  return new Response(JSON.stringify({ id: userId, name: "John Doe" }), {
    status: 200,
  });
}
