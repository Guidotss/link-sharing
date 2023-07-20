import { verifyToken } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function PUT(req: Request) {
  const { image } = await req.json();

  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return new Response(
      JSON.stringify({ ok: false, message: "Unauthorized" }),
      { status: 401, statusText: "Unauthorized" }
    );
  }

  const { id } = (await verifyToken(token)) as { id: string };
  if (!id) {
    return new Response(
      JSON.stringify({ ok: false, message: "Unauthorized" }),
      { status: 401, statusText: "Unauthorized" }
    );
  }

  try {
    const { image: userImage } = await userService.updateUserImage(id, image);

    if (!userImage) {
      return new Response(
        JSON.stringify({ ok: false, message: "User not found" }),
        { status: 404, statusText: "Not found" }
      );
    }

    return new Response(JSON.stringify({ ok: true, image: userImage }), {
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
