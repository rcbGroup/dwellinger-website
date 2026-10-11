import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Only these routes require authentication
const PROTECTED_PATHS = [
  '/dashboard',
  '/passport',
  '/scope-builder',
  '/messages',
  '/scopes',
  '/settings',
]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Check if this path requires auth
  const needsAuth = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )

  if (!needsAuth) {
    return NextResponse.next()
  }

  // Check for Supabase session cookie (any sb-*-auth-token cookie)
  const cookies = req.cookies
  const hasSession = [...cookies.getAll()].some(
    (c) => c.name.startsWith('sb-') && c.name.endsWith('-auth-token')
  )

  if (!hasSession) {
    const url = new URL('/login', req.url)
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files (with extensions)
     * - api routes (handled separately)
     */
    '/((?!_next/static|_next/image|favicon\.ico|.*\..*|api/).*)'
  ],
}
