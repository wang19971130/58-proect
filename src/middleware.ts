import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // / 匹配所有路径名，但以下情况除外：
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};