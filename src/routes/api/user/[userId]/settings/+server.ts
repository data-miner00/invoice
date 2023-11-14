import { error, text, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

export const POST: RequestHandler = async ({ request, params }) => {
	const { taxRate, theme, currency, invoiceFormat } = await request.json();

	const userId = params.userId;

	try {
		const updatedSettings = await prisma.userPreference.update({
			where: {
				userId
			},
			data: {
				taxRate,
				theme,
				currencyIso: currency,
				invoiceFormat
			}
		});

		return json({ updatedSettings });
	} catch (e) {
		throw error(500, 'something bad happened');
	}
};

export const fallback: RequestHandler = async ({ request }) => {
	return text(`Unknown request method ${request.method} caught`);
};
