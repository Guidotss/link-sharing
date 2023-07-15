import { IllustrationEmptyIcon, MockUpIcon, Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-5 py-5">
      <Navbar />
      <section className="flex 2xl:gap-60 gap-40 2xl:px-56 px-20">
        <div className="mt-24">
          <MockUpIcon />
        </div>
        <div className="mt-24 w-full">
          <div>
            <h1 className="text-3xl font-bold">Customize your links</h1>
            <p className="mt-2 text-grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button className="border-[1px] border-purple rounded-lg w-full py-2 mt-10 font-semibold text-purple hover:bg-light_purple transition-all">
              + Add new link
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mt-24">
            <IllustrationEmptyIcon/>
            <h3 className="text-4xl font-bold mt-10">
              Let{"'"}s get you started
            </h3>
            <p className="2xl:w-[55%] w-[90%] mt-10 text-grey text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
          </div>
          <div className="w-full flex justify-end mt-20 border-t-[1px] p-5">
            <button className="bg-purple px-5 py-2 rounded-lg text-white font-semibold hover:bg-soft_purple transition-all">
              Save
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
