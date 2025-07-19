import prisma from '$lib/prisma';
import { Actions, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, params }) => {
	const customer = await prisma.customer.findFirst({
		where: {
			id: params.id
		},
		include: {
			address: true
		}
	});

	return {
		customer
	};
};

export const actions = {
	customer: async ({ cookies, request }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		const firstName = data.get('firstName')?.toString();
		const lastName = data.get('lastName')?.toString();
		const email = data.get('email')?.toString();
		const phoneNo = data.get('phone')?.toString();

		if (!id || !firstName || !lastName || !email || !phoneNo) {
			return { status: 400, body: { message: 'bad input' } };
		}

		try {
			const updatedCustomer = await prisma.customer.update({
				where: {
					id
				},
				data: {
					firstName,
					lastName,
					email,
					phoneNo
				}
			});

			return { status: 200, body: updatedCustomer };
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	}
} satisfies Actions;
