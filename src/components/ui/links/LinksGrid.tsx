import { useContext } from "react"
import { LinksContext } from "@/context"


export const LinksGrid = () => {
    const { links } = useContext(LinksContext);
  return (
    <div>LinksGrid</div>
  )
}
