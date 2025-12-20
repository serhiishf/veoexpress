import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handle_i18n_routing = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  return handle_i18n_routing(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};