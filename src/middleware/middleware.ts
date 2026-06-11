import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const publicRoutes = ["/auth/login", "/auth/register"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path === "/dashboard" || path.startsWith("/dashboard/");
  const isPublicRoute = publicRoutes.includes(path);
  
  const cookie = req.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  
};

export async function logout() {
  await deleteSession(); 
  redirect("/login");
}