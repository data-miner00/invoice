import crypto from 'crypto';

export const load = () => {
	const invoices = [
		{
			invoiceNo: '123',
			purchaseNo: '123'
		}
	];
	console.log(crypto.randomUUID());
	return { invoices };
};
