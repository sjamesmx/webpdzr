import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Determinar qué app servir basado en el dominio
  let appPath = '';
  
  if (hostname.includes('play.padelyzer.com')) {
    appPath = '/apps/web-player';
  } else if (hostname.includes('pro.padelyzer.com')) {
    appPath = '/apps/web-club';
  } else {
    // Default to router for www.padelyzer.com or padelyzer.com
    appPath = '/apps/router';
  }

  // Rewrite the request to the correct app
  if (appPath) {
    url.pathname = `${appPath}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};