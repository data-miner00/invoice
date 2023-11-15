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
		const street1 = data.get('street1')?.toString();
		const street2 = data.get('street2')?.toString();
		const city = data.get('city')?.toString();
		const state = data.get('state')?.toString();
		const postcode = data.get('postcode')?.toString();
		const country = data.get('country')?.toString();
		const shortened = data.get('shortened')?.toString();

		if (!firstName || !lastName || !email || !phoneNo) {
			return fail(400, { message: 'bad input' });
		}

		try {
			const addedCustomer = await prisma.customer.create({
				data: {
					firstName,
					lastName,
					email,
					phoneNo,
					address: {
						create: {
							street1,
							street2,
							city,
							state,
							postcode,
							country,
							shortened
						}
					}
				}
			});

			return addedCustomer;
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	}
} satisfies Actions;
