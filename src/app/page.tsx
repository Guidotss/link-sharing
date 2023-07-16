import { AddNewLinkSection, MockUpIcon, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="px-5 py-5">
      <Navbar />
      <section className="flex 2xl:gap-60 gap-40 2xl:px-56 px-20">
        <div className="mt-24">
          <MockUpIcon />
        </div>
        <div className="mt-24 w-full">
          <AddNewLinkSection />
        </div>
      </section>
    </main>
  );
}
