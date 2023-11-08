import { redirect } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server';
import { isTokenExpired } from 'pocketbase';
import { Redirect } from 'next';
import { useRouter } from 'next/navigation';

export function middleware(request: NextRequest) {
  // You can also export a `config.matcher` array,
  // but i believe this way is more straightforward and scalable.
  if (request.nextUrl.pathname.includes('/dashboard')) {
    const authCookie = request.cookies.get('pb_auth');

    // If there's no token or it's expired, redirect to  login page.
    if (authCookie) {
      if (isTokenExpired(authCookie.value)) {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
      }
    }
  }
}

// Read more about Next.js middleware in: https://nextjs.org/docs/app/building-your-application/routing/middleware
