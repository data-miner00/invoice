import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	var res = await fetch('https://dummyjson.com/products?limit=10');
	var { products } = await res.json();

	return {
		products
	};
}) satisfies PageLoad;
