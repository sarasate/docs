import type { GetStaticPathsOptions, GetStaticPathsResult } from 'astro';

// TODO: whatever this is
const routes = [] as any[];

/**  All the OpenGraph image paths as generated by our `getStaticPaths`. */
const paths = new Set(routes.map(({ params }) => params.path));

/**
 * Get the path to the OpenGraph image for a page
 * @param path Pathname of the page URL.
 * @param isFallback Whether or not this page is displaying fallback content.
 * @returns Path to the OpenGraph image if found. Otherwise, `undefined`.
 */
export function getOgImageUrl(path: string, isFallback: boolean): string | undefined {
	let imagePath = path.replace(/^\//, '').replace(/\/$/, '') + '.png';
	if (isFallback) {
		// Replace the language segment with 'en' for fallback pages.
		imagePath = 'en' + imagePath.slice(imagePath.indexOf('/'));
	}
	if (paths.has(imagePath)) return '/open-graph/' + imagePath;
}
