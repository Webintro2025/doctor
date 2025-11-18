import { locations } from '@/marketplace';
import { productDropdownList } from '@/data/productList';

const SITE_URL = 'https://doctorhand.in';

function slugify(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function GET() {
  const pages = new Set();

  // Static pages
  pages.add(`${SITE_URL}/`);
  pages.add(`${SITE_URL}/about`);
  pages.add(`${SITE_URL}/contact`);

  // Product / service pages from product list
  if (Array.isArray(productDropdownList)) {
    for (const p of productDropdownList) {
      if (p && p.slug) {
        // ensure slug starts with /
        const slug = p.slug.startsWith('/') ? p.slug : `/${p.slug}`;
        pages.add(`${SITE_URL}${slug}`);
      }
    }
  }

  // Dynamic location pages (under /in/[slug])
  if (Array.isArray(locations)) {
    for (const loc of locations) {
      const s = slugify(loc || '');
      if (s) pages.add(`${SITE_URL}/in/${s}`);
    }
  }

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    Array.from(pages)
      .map((url) => {
        return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
      })
      .join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
