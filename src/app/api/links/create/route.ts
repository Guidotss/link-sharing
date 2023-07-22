import { LinkService } from "@/services";

const linksService = new LinkService();

export async function POST(req: Request) {
  const { userId, links } = await req.json();
  if (!userId)
    return new Response(
      JSON.stringify({ ok: false, message: "No user id provided" }),
      { status: 400 }
    );

  try {
    const result = await linksService.createLink(userId,links);
    return new Response(JSON.stringify({ ok: true, result }), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
