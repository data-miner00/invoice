import type { PageServerLoad } from '../$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ request }) => {
	const profile = await prisma.user.findFirst();
	const address = await prisma.address.findFirst({
		where: {
			userId: profile?.id
		}
	});
	const bankAccount = await prisma.bankAccount.findFirst({
		where: {
			userId: profile?.id
		}
	});

	return {
		profile,
		address,
		bankAccount
	};
};
