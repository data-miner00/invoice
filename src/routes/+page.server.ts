import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const user = await prisma.user.findFirst();

	return {
		user
	};
}) satisfies PageServerLoad;
