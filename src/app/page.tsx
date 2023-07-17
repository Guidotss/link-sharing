import { AddNewLinkSection, MockUpIcon, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="px-20 py-5 bg-light_grey">
      <Navbar />
      <section className="flex 2xl:gap-3 gap-40 px-20 mt-14">
        <div className="bg-white flex-auto h-[75vh] w-full flex items-center justify-center rounded-lg">
          <MockUpIcon />
        </div>
        <div className="w-full bg-white min-h-[75vh] items-center justify-center rounded-lg p-10">
          <AddNewLinkSection />
        </div>
      </section>
    </main>
  );
}
