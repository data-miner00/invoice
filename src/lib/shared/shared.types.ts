export type Address = {
	firstLine: string;
	secondLine: string;
	thirdLine: string;
	postcode: string;
	state: string;
	country: string;
	shortened: string;
};

export type BankAccount = {
	bankName: string;
	bankCountry: string;
	accountHolder: string;
	accountNo: string;
};

export type Company = {
	name: string;
	registrationNo: string;
	address: Address;
	phoneNo: string;
	bankAccount: BankAccount;
};

export type Individual = Omit<Company, 'registrationNo'>;

export type BillingItem = {
	name: string;
	quantity: number;
	unitPrice: number;
};

export type BillingRecipient = Omit<Individual, 'bankAccount'>;

export type AppSettings = {
	tax: number;
	template: string;
	theme: string;
};

export type InvoiceTemplate = {
	theme: string;
	isTaxEnabled: boolean;
};

export type Invoice = {
	index: number;
	NoFmt: string;
	date: Date;
	tax: number;
	currency: Currency;
};

export type Currency = {
	symbol: string;
	code: string;
	country: string;
};
