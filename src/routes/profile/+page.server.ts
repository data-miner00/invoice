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

			return updatedUser;
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	},
	address: async ({ cookies, request }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		const street1 = data.get('street1')?.toString();
		const street2 = data.get('street2')?.toString();
		const city = data.get('city')?.toString();
		const state = data.get('state')?.toString();
		const postcode = data.get('postcode')?.toString();
		const country = data.get('country')?.toString();
		const shortened = data.get('shortened')?.toString();

		if (!id || !street1 || !street2 || !city || !state || !postcode || !country || !shortened) {
			return fail(400, { message: 'bad input ' });
		}

		try {
			var get = await prisma.address.findFirst({
				where: { id }
			});

			console.log(get);
			const updatedAddress = await prisma.address.update({
				where: {
					id
				},
				data: {
					street1,
					street2,
					city,
					country,
					state,
					postcode,
					shortened
				}
			});

			return updatedAddress;
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	},
	bank: async ({ cookies, request }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		const bankName = data.get('bankName')?.toString();
		const bankCountry = data.get('bankCountry')?.toString();
		const accountHolder = data.get('accountHolder')?.toString();
		const accountNo = data.get('accountNo')?.toString();

		if (!id || !bankName || !bankCountry || !accountHolder || !accountNo) {
			return fail(400, { message: 'bad input ' });
		}

		try {
			const updatedBank = await prisma.bankAccount.update({
				where: {
					id
				},
				data: {
					bankName,
					bankCountry,
					accountHolder,
					accountNo
				}
			});

			return updatedBank;
		} catch (e) {
			throw error(500, `Error occurred: ${JSON.stringify(e)}`);
		}
	}
} satisfies Actions;
