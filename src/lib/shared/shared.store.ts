import { writable, type Writable, derived } from 'svelte/store';
import type { BillingItem, BillingRecipient, Company, Individual, Invoice } from './shared.types';
import type { User } from '@prisma/client';

export const invoice$: Writable<Invoice> = writable<Invoice>({
	invoiceNo: {
		index: 1,
		prefix: 'A'
	},
	date: new Date(),
	payable: {
		tax: {
			mode: 'percentage',
			amount: 0
		},
		discount: {
			mode: 'percentage',
			amount: 0
		},
		shippingFee: {
			mode: 'percentage',
			amount: 0
		}
	},
	currency: {
		symbol: 'RM',
		code: 'MYR',
		country: 'Malaysia'
	}
});

export const individuals$: Writable<Individual[]> = writable<Individual[]>([
	{
		name: 'Hazel Nguyen',
		address: {
			firstLine: 'XXX',
			secondLine: 'XXX',
			thirdLine: 'XXX',
			postcode: '23500',
			state: 'Southampton',
			country: 'USA',
			shortened: '71 Cherry Court Southhampton, UK'
		},
		phoneNo: '+231 433 2342',
		bankAccount: {
			bankName: 'Hilton Bank',
			bankCountry: 'South Africa',
			accountHolder: 'Hazel Nguyen',
			accountNo: '63534283736'
		}
	}
]);

export const companies$: Writable<Company[]> = writable<Company[]>([]);

export const billingRecipient$: Writable<BillingRecipient> = writable<BillingRecipient>({
	name: 'Steven Jones',
	address: {
		firstLine: 'XXX',
		secondLine: 'XXX',
		thirdLine: 'XXX',
		postcode: '50000',
		state: 'Singapore',
		country: 'Singapore',
		shortened: 'No. 4, Orchard Road, Singapore.'
	},
	phoneNo: '+6510-01010100'
});

export const items$: Writable<BillingItem[]> = writable<BillingItem[]>([
	{
		id: 0,
		name: '3B Sports Icon Medium Fit Tracksuit Jacket Double XL Premium Edition',
		quantity: 8,
		unitPrice: 125
	},
	{
		id: 1,
		name: 'Bootcut Pants',
		quantity: 23,
		unitPrice: 10
	},
	{
		id: 2,
		name: 'Crystal Mesh Top',
		quantity: 1,
		unitPrice: 300
	},
	{
		id: 3,
		name: "Medieval Knight's Armor",
		quantity: 1,
		unitPrice: 270
	},
	{
		id: 4,
		name: 'Outline Tracksuit Jacket',
		quantity: 1,
		unitPrice: 200
	}
]);

export const loggedInUser$: Writable<User> = writable<User>();
