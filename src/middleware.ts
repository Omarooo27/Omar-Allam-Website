import { defineMiddleware } from 'astro:middleware';

// Static hosts serve dist/index.html directly; keep the old URL working in dev too.
export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  if (url.pathname === '/index.html') return redirect('/');
  return next();
});
