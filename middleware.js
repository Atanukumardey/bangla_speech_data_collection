import { getToken } from "next-auth/jwt";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "./lib/routes";
import { getServerSession } from "next-auth";

export function middleware(req) {
  const { nextUrl } = req;
  const token = getToken({ req });
  // const session = getServerSession(req);

  console.log("From MiddleWare: ", nextUrl.pathname)
  console.log("From MiddleWare: ", token)

  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAuthenticated = true;

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  // if (!token?.value) {
  //   return NextResponse.json({ error_code: 'no_token', message: "No token found" }, { status: 200 });
  // }
  // console.log("Token: ", token?.value)

  // const response = NextResponse.next()


  // // if (req.url.includes("/Auth/Signin") && authUser) {
  // //   return NextResponse.redirect(new URL("/", req.url))
  // // }

  // return response
}

export const config = {
  matcher: ['/User/:path*', '/Auth/:path*']
}
