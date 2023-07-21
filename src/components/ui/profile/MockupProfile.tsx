"use client"
import { useContext } from "react"
import { AuthContext } from "@/context"
import { MockUpIcon } from "../icons"
import Image from "next/image"


export const MockupProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email)

  return (
    <div>
        <MockUpIcon
            isInProfile
            userImage={!!user?.image}
            firtsName={!!user?.firstName}
            email={!!user?.email}
        />
        <div className={`${user?.image ? 'absolute' : 'hidden'} 2xl:top-56 2xl:ml-[6rem] mt-6`}>
            <div className="rounded-full ">
                <Image
                    src={`${user?.image ? user?.image : ""}`} 
                    alt="profile image"
                    width={1024}
                    height={1024}
                    className="rounded-full w-[110px] h-[110px] border-[4px] border-purple"
                    loading="eager"
                />
            </div>
        </div>
        <div className={ `${(user?.firstName || user?.email) ? 'absolute' : 'hidden'} 2xl:top-[410px] 2xl:ml-14` }> 
            <span className="text-lg font-bold text-purple">{user?.firstName}</span>
            <span className="text-md text-grey">{user?.email}</span>
        </div>
    </div>
  )
}