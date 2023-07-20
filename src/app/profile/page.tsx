import { LinksGrid, MockUpIcon, Navbar, UpdateProfileSection } from "@/components";

function ProfilePage() {
  return (
    <main className="bg-light_grey px-20 py-5">
      <Navbar/>
      <section className="flex 2xl:gap-3 px-20 mt-14">
        <div className="bg-white flex-auto 2xl:h-[75vh] h-full w-full flex items-center justify-center rounded-lg">
          <div className="-mt-16">
            <LinksGrid />
          </div>
          <MockUpIcon  isInProfile/>
        </div>
        <div className="w-full bg-white min-h-[75vh] items-center justify-center rounded-lg p-10"> 
          <UpdateProfileSection/>
        </div>
      </section>
        
    </main>
  )
}


export default ProfilePage; 