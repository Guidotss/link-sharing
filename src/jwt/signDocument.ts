import { Links } from "@/interfaces";
import jwt from "jsonwebtoken";

export const signDocument = (id: string, email: string, links?: Links) => {
  if (!process.env.JSON_SECRET) throw new Error("JSON_SECRET not found");
  const token = jwt.sign({ id, email, links }, process.env.JSON_SECRET, {
    expiresIn: "1h",
  });
  return token;
};
