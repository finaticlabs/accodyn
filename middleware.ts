import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory store for rate limiting
const ipRequests = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // Max requests per minute per IP

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Get the client's IP address
  const ip = request.ip || 'unknown'
  
  // Basic Rate Limiting
  const now = Date.now()
  const requestData = ipRequests.get(ip) || { count: 0, timestamp: now }
  
  // Reset counter if outside window
  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    requestData.count = 0
    requestData.timestamp = now
  }
  
  requestData.count++
  ipRequests.set(ip, requestData)
  
  // If rate limit exceeded, return 429 Too Many Requests
  if (requestData.count > MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  // Get hostname (e.g. finaticlabs.com, www.finaticlabs.com, etc.)
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'http'
  const url = new URL(request.url)

  // Only handle www to non-www redirect for production domain
  if (hostname.startsWith('www.finaticlabs.com')) {
    const newUrl = `https://finaticlabs.com${url.pathname}${url.search}`
    return NextResponse.redirect(newUrl, 301)
  }

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Add CSP header with more permissive settings for Vercel deployment
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self' vercel.app *.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.app *.vercel.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' *.vercel.app;"
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO)
     * - sitemap.xml (SEO)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*|api).*)',
  ],
} 