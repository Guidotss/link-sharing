import { LinkService } from "@/services";

const linkService = new LinkService();

export async function DELETE(req: Request) {
  const { linkId } = await req.json();
  if (!linkId)
    return new Response(JSON.stringify({ error: "Missing linkId" }), {
      status: 400,
    });

  try {
    const link = await linkService.remove(linkId);
    if(!link) return new Response(JSON.stringify({ ok: false, message: "Link not found" })); 
    return new Response(JSON.stringify({ ok: true, link }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" })
    );
  }
}
