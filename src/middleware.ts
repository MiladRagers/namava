import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  if (request.nextUrl.pathname.startsWith("/plans")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/plans/:path*", "/p-user/:path*"],
};
