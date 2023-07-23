import { NextResponse, NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  if (
    req.nextUrl.pathname.split("/")[1] == "" ||
    req.nextUrl.pathname.split("/")[1] == "profile"
  ) {
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl).href);
    }
  }
  return NextResponse.next();
};
