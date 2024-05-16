import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { useVerifyToken } from './hooks/auth-hooks'
import axios from 'axios'
import Cookies from "js-cookie";

 
// This function can be marked `async` if using `await` inside

// const protectedRoutes = ['/']
// const publicRoutes = ['/login', '/signup']

export async function middleware (request: NextRequest) {

  
  const authToken = request.cookies.get("token")?.value
  const userId = request.cookies.get("userId")?.value

  const afterLoggedIn = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup" 

  if (afterLoggedIn) {
    if (authToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else {
      // verify
      const res = await fetch("https://e-com-server-v8sh.onrender.com/api/auth/verify-token", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authToken
        } 
      })
      const data = await res.json()
      if (data.userId !== userId) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
  }

  
  // const path = request.nextUrl.pathname
  // const isProtectedRoute = protectedRoutes.includes(path)
  // const isPublicRoute = publicRoutes.includes(path)
  // const data = useValidateUser(token.value)

  // console.log("token verification",data)


  // if (!token) {
  //    return NextResponse.redirect(new URL('/login', request.url))
  // }

  // if ( request.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  // if ( request.nextUrl.pathname === "/products") {
  //   return NextResponse.redirect(new URL('/products', request.url))
  // }

  // if ( request.nextUrl.pathname === "/shop") {
  //   return NextResponse.redirect(new URL('/shop', request.url))
  // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login", 
    "/signup",
    "/", 
    "/products", 
    "/products/:path*", 
    "/shop", 
  ]
}