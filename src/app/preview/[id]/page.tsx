import { RightArrowIcon, ShareLinkButton } from "@/components";
import { selectOptions } from "@/constants";
import { Links } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface PreviewPageProps {
  params: {
    id: string;
  };
}

const getUserInfo = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      cache: "no-cache",
    });
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
        <div className="absolute min-h-[500px] rounded-lg bg-white w-[349px] -mt-32 flex flex-col gap-5 items-center">
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
            {links?.map((link: Links) => {
              let bgColor = selectOptions.find(
                (option) =>
                  option.name.toLowerCase() === link.name.toLowerCase()
              )?.bgColor;
              if (bgColor == "white") {
                bgColor = `bg-${bgColor}`;
              }
              return (
                <div
                  key={link.id!}
                  className={` ${bgColor} rounded-lg flex justify-between items-center py-4 text-white mb-4 w-[230px]`}
                >
                  <div className="flex items-center gap-2 ml-2 ">
                    {selectOptions
                      .find(
                        (option) =>
                          option.name.toLowerCase() === link.name.toLowerCase()
                      )
                      ?.icon({ fill: "#fff" })}
                    <h1
                      className={`${bgColor == "bg-white" ? "text-black" : ""}`}
                    >
                      {link.name}
                    </h1>
                  </div>
                  <div className="mr-2 2xl:mr-4 cursor-pointer">
                    <RightArrowIcon
                      isWhite={bgColor == "bg-white" ? false : true}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PreviewPage;
