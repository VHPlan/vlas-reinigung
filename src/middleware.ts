import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("admin_session")?.value;
  const isLoginPage = request.nextUrl.pathname === "/admin/login";
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");

  if (isAdminPath && !isLoginPage && session !== "authenticated") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isLoginPage && session === "authenticated") {
    return NextResponse.redirect(new URL("/admin/galerie", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
