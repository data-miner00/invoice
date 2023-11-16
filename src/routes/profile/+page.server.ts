import type { PageServerLoad, Actions } from '../$types';
import prisma from '$lib/prisma';
import { error, fail } from '@sveltejs/kit';

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

export const actions = {
	user: async ({ cookies, request }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		const username = data.get('username')?.toString();
		const firstName = data.get('first_name')?.toString();
		const lastName = data.get('last_name')?.toString();
		const email = data.get('email')?.toString();
		const phoneNo = data.get('phone')?.toString();
		const password = data.get('password')?.toString();

		if (!id || !username || !firstName || !lastName || !email || !phoneNo || !password) {
			return fail(400, { message: 'bad input ' });
		}

		console.log(id);
		try {
			const updatedUser = await prisma.user.update({
				where: {
					id
				},
				data: {
					username,
					firstName,
					lastName,
					phoneNo,
					password,
					email
				}
			});
			console.log(updatedUser);
			return updatedUser;
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	}
} satisfies Actions;
