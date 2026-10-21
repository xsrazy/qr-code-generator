import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || ""
  if (host === "qr.xsrazy.web.id") {
    return NextResponse.redirect("https://tools.xsrazy.web.id/qr/", 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
