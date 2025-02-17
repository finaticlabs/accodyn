import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get hostname (e.g. finaticlabs.com, www.finaticlabs.com, etc.)
  const hostname = request.headers.get('host') || ''

  // If www, redirect to non-www
  if (hostname.startsWith('www.')) {
    const newUrl = `https://${hostname.replace('www.', '')}${request.nextUrl.pathname}${request.nextUrl.search}`
    return NextResponse.redirect(newUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
} 