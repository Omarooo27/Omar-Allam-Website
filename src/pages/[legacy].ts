import type { APIRoute } from 'astro';

// Emit real .html files so existing bookmarks work on ordinary static hosts.
export function getStaticPaths() {
  return ['frontenac', 'asv', 'aptera', 'acdc', 'rover', 'humantracker'].map(slug => ({
    params: { legacy: `project-${slug}.html` },
    props: { destination: `/projects/${slug}/` },
  }));
}

export const GET: APIRoute = ({ props }) => new Response(
  `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${props.destination}"><link rel="canonical" href="${props.destination}"><title>Project — Omar Allam</title></head><body><p><a href="${props.destination}">Continue to the project</a></p></body></html>`,
  { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
);
