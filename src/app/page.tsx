import { MockUpIcon, Navbar, AddNewLinkSection, LinksGrid } from "@/components";

export default function Home() {
  return (
    <main className="px-20 py-5 bg-light_grey">
      <Navbar />
      <section className="flex 2xl:gap-3 px-20 mt-14">
        <div className="bg-white flex-auto 2xl:h-[75vh] h-full w-full flex items-center justify-center rounded-lg">
          <div className="-mt-16">
            <LinksGrid />
          </div>
          <MockUpIcon />
        </div>
        <div className="w-full bg-white min-h-[75vh] items-center justify-center rounded-lg p-10">
          <AddNewLinkSection />
        </div>
      </section>
    </main>
  );
}
