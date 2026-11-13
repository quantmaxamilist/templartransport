import { site, areas } from '../data/site';
export function GET() {
  const paths = ['/', '/about', '/services', '/testimonials', '/contact', '/areas', ...areas.map((a) => `/areas/${a.slug}`), '/privacy'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
}
