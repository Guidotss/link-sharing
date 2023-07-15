import jwt from "jsonwebtoken";

export const verifyToken = (token: string) => {
  if (!process.env.JSON_SECRE) throw new Error("JSON_SECRET not found");

  if (!token || token.length < 10) throw new Error("Invalid token");

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JSON_SECRET || "", (error, decoded) => {
        if (error) return reject(error);
        resolve(decoded);
      });
    } catch (error) {
      reject(error);
    }
  });
};
