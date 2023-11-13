import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const settings = await prisma.userPreference.findFirst();

	return {
		settings
	};
}) satisfies PageServerLoad;
