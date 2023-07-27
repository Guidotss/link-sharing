import {
  LinksGrid,
  MockupProfile,
  Navbar,
  UpdateProfileSection,
} from "@/components";

function ProfilePage() {
  return (
    <main className="bg-light_grey md:px-16 sm:px-5 sm:py-5">
      <Navbar />
      <section className="flex 2xl:gap-3 md:px-20 mt-14">
        <div className="bg-white flex-auto 2xl:h-[75vh] h-full w-full hidden md:flex items-center justify-center rounded-lg">
          <div className="-mt-16">
            <LinksGrid />
          </div>
          <MockupProfile />
        </div>
        <div className="w-full bg-white min-h-[75vh] items-center justify-center rounded-lg sm:p-10">
          <UpdateProfileSection />
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
