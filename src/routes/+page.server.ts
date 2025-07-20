import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const user = await prisma.user.findFirst();
	const customers = await prisma.customer.findMany();
	const addresses = await prisma.address.findMany();
	const invoices = await prisma.invoice.findMany();

	return {
		user,
		customers,
		addresses,
		invoices
	};
}) satisfies PageServerLoad;
