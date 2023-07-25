import { LinksPreviewGrid,ShareLinkButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface PreviewPageProps {
  params: {
    id: string;
  };
}

const getUserInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}${id}`,{ cache: "no-cache" });
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

async function PreviewPage({ params: { id } }: PreviewPageProps) {
  const user = await getUserInfo(id);
  const links = user?.Links;
  return (
    <main className="w-full h-screen bg-light_grey">
      <header className="bg-purple p-10 h-[357px] rounded-b-3xl">
        <nav className="bg-white w-full flex justify-between rounded-lg p-5 px-10">
          <Link
            href="/"
            className="border-[1px] px-5 py-2 rounded-lg border-purple text-purple font-semibold hover:bg-purple hover:border-white hover:text-white transition duration-300 ease-in-out"
          >
            Back to Editor
          </Link>
          <ShareLinkButton />
        </nav>
      </header>
      <section className="flex item-center justify-center">
        <div className="absolute 2xl:min-h-[500px] rounded-lg bg-white w-[349px] 2xl:-mt-32 sm:-mt-44 flex flex-col gap-5 items-center">
          <Image
            className="rounded-full border-[3px] border-purple mt-10"
            src={user?.image ? user?.image : "https://placehold.jp/150x150.png"}
            alt="user image"
            width={120}
            height={120}
          />
          <div className="flex flex-col items-center">
            <div className="flex gap-2 text-2xl font-bold">
              <h3>{user?.firstName}</h3>
              <h3>{user?.lastName}</h3>
            </div>
            <span className="text-grey text-md">{user?.email}</span>
          </div>
          <div className="flex flex-col">
            <LinksPreviewGrid links={links} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PreviewPage;
