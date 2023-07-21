import { verifyToken } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function PUT(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token)
    return new Response(
      JSON.stringify({ ok: false, message: "Unauthorized" }),
      { status: 401 }
    );

  const { firstName, lastName, email } = (await req.json()) as {
    firstName: string;
    lastName: string;
    email: string;
  };

  try {
    const { id } = (await verifyToken(token)) as { id: string };

    const userUpdated = await userService.updateUser(id, firstName, lastName, email);
    if (!userUpdated)
      return new Response(
        JSON.stringify({ ok: false, message: "User not found" }),
        { status: 404 }
      );

    return new Response(JSON.stringify({ ok: true, user: userUpdated }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
