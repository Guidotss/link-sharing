import { useContext } from "react"
import { LinksContext } from "@/context"
import { Links } from "@/interfaces";



export const LinksGrid = () => {
    const { links } = useContext(LinksContext);
  return (
    <div>
      {links?.map((link:Links, index) => (
        <h1 key={index} >{link.name}</h1>
      ))}
    </div>
  )
}
