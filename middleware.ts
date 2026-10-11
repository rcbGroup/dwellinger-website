import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that require authentication
const PROTECTED_PATHS = ['/passport', '/scope-builder', '/messages']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )

  if (!isProtected) return NextResponse.next()

  // Supabase v2 stores the JWT session in a cookie named sb-<project-ref>-auth-token
  // It may be chunked into .0, .1 etc for large tokens
  const cookies = request.cookies.getAll()
  const hasAuthSession = cookies.some(
    (c) => c.name.includes('-auth-token') && c.value.length > 10
  )

  if (!hasAuthSession) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/login'
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/passport/:path*',
    '/scope-builder/:path*',
    '/messages/:path*',
  ],
}
