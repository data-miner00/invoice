import { writable, type Writable } from 'svelte/store';
import type { BillingItem, BillingRecipient, Company, Individual, Invoice } from './shared.types';

export const invoice$: Writable<Invoice> = writable<Invoice>({
	index: 1,
	date: new Date(),
	tax: 0,
	NoFmt: '',
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
		name: '3B Sports Icon Medium Fit Tracksuit Jacket Double XL Premium Edition',
		quantity: 8,
		unitPrice: 125
	},
	{
		name: 'Bootcut Pants',
		quantity: 23,
		unitPrice: 10
	},
	{
		name: 'Crystal Mesh Top',
		quantity: 1,
		unitPrice: 300
	},
	{
		name: "Medieval Knight's Armor",
		quantity: 1,
		unitPrice: 270
	},
	{
		name: 'Outline Tracksuit Jacket',
		quantity: 1,
		unitPrice: 200
	}
]);
