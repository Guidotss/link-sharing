"use client"
import { useContext } from "react"
import { LinksContext } from "@/context"
import { Links } from "@/interfaces";



export const LinksGrid = () => {
    const { links } = useContext(LinksContext);
  return (
    <div className="flex flex-col gap-10">
      {links?.map((link:Links, index) => (
        <h1 className="bg-red w-full rounded-lg px-16 py-3" key={index}>{link.name}</h1>
      ))}
    </div>
  )
}
