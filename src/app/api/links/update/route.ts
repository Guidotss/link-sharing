import { LinkService } from "@/services";

const linkService = new LinkService();

export async function PUT(req: Request) {
  const { link } = await req.json();

  if (!link) {
    return new Response(
      JSON.stringify({ ok: false, message: "No link provided" }),
      { status: 400 }
    );
  }

  try {
    const linkUpdated = await linkService.update(link);
    if (!linkUpdated) {
      return new Response(
        JSON.stringify({ ok: false, message: "Link not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ ok: true, link: linkUpdated }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" })
    );
  }
}
