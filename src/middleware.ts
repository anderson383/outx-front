export { default } from 'next-auth/middleware';

export const config = { matcher: ['/', '/search/:path*', '/config/:path*'] };
