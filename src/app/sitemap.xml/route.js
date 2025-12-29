import { locations } from '@/marketplace';
import { productDropdownList } from '@/data/productList';

export async function GET() {
	const baseUrl = 'https://doctorshand.com';

	// Static pages
	const staticPages = ['', '/about', '/contact'];

	// Product / service pages from product list
	const productPages = Array.isArray(productDropdownList)
		? productDropdownList
				.filter((p) => p && p.slug)
				.map((p) => (p.slug.startsWith('/') ? p.slug : `/${p.slug}`))
		: [];

	// Location pages: /in/{slug} (matches dynamic route)
	const locationPages = Array.isArray(locations)
		? locations.map((loc) => `/kidney-treatment-services-in/${String(loc).toLowerCase().replace(/\s+/g, '-')}`)
		: [];

	const allPages = [...staticPages, ...productPages, ...locationPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		allPages
			.map(
				(page) =>
					`  <url>\n    <loc>${baseUrl}${page}</loc>\n  </url>`
			)
			.join('\n') +
		'\n</urlset>';

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml' },
	});
}

