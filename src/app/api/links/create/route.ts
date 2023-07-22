import { LinkService } from "@/services";

const linksService = new LinkService();

export async function GET(req: Request) {
  const { userId, ...links } = await req.json();
  if (!userId)
    return new Response(
      JSON.stringify({ ok: false, message: "No user id provided" }),
      { status: 400 }
    );

  try {
    const userLinks = await linksService.getLinksByUserId(userId);
    if (!userLinks)
      return new Response(
        JSON.stringify({ ok: false, message: "No links found" }),
        { status: 404 }
      );

    return new Response(JSON.stringify({ ok: true, userLinks }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
