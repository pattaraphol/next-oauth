import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  //console.log('token')
  //console.log(token)
  
  if (token == null) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
  //return NextResponse.redirect(new URL('/user/personalinfo', request.url))
}

export const config = { 
  matcher: ['/user/:path*', '/learning/:path*']
}