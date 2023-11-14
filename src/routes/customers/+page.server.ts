import type { PageServerLoad, Actions } from '../$types';
import { fail, error } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ cookies }) => {
	const customers = await prisma.customer.findMany();

	return { customers };
};

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const firstName = data.get('first_name')?.toString();
		const lastName = data.get('last_name')?.toString();
		const email = data.get('email')?.toString();
		const phoneNo = data.get('phone')?.toString();

		if (!firstName || !lastName || !email || !phoneNo) {
			return fail(400, { message: 'bad input' });
		}

		const addedCustomer = await prisma.customer.create({
			data: {
				firstName,
				lastName,
				email,
				phoneNo
			}
		});

		return addedCustomer;
	}
} satisfies Actions;
