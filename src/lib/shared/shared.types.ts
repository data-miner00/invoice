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
	id: number;
	name: string;
	quantity: number;
	unitPrice: number;
};

export type BillingRecipient = Omit<Individual, 'bankAccount'>;

// Settings - Default Values
export type AppSettings = {
	tax: number;
	template: string;
	theme: string;
};

export type InvoiceNo = {
	index: number;
	prefix: string;
};

export type Invoice = {
	invoiceNo: InvoiceNo;
	date: Date;
	dueDate?: Date;
	currency: Currency;
	payable: Payable;
};

export type Currency = {
	symbol: string;
	code: string;
	country: string;
};

export type Payable = {
	tax: Amount;
	discount: Amount;
	shippingFee: Amount;
};

export type Amount = {
	amount: number;
	mode: 'percentage' | 'literal';
};

export enum UserRole {
	Administrator,
	User,
	Guest
}
