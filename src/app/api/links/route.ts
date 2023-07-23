import { LinkService } from "@/services";

const linksService = new LinkService();

export async function GET(req: Request) {
  const userId = req.headers.get("user-id");

  if (!userId) return { status: 400, body: { message: "Bad request" } };

  try {
    const links = await linksService.getLinksByUserId(userId);
    return new Response(JSON.stringify({ ok: true, links }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" })
    );
  }
}
