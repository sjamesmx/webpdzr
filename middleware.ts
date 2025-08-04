import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // En desarrollo, usa localhost
  if (hostname.includes('localhost')) {
    return NextResponse.next();
  }

  // Redireccionar basado en el dominio
  const url = request.nextUrl.clone();
  
  if (hostname.includes('play.padelyzer.com')) {
    // Servir app de jugadores
    url.pathname = `/player${url.pathname}`;
    return NextResponse.rewrite(url);
  } 
  
  if (hostname.includes('pro.padelyzer.com')) {
    // Servir app de clubes
    url.pathname = `/club${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  
  // Default: servir router
  url.pathname = `/router${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};