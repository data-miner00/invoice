import { PrismaClient } from '@prisma/client';

var prisma = new PrismaClient();

async function main() {
	var rootUser = await prisma.user.create({
		data: {
			username: 'alice',
			firstName: 'Alice',
			lastName: 'Brooke',
			phoneNo: '+60123456789',
			role: 'admin',
			password: 'password123',
			bankAccount: {
				create: {
					bankName: 'Maybank',
					bankCountry: 'Malaysia',
					accountHolder: 'Alice Brooke',
					accountNo: '696969696-669'
				}
			},
			preference: {
				create: {
					invoiceFormat: 'A%.4f',
					taxRate: 0.01,
					theme: 'light'
				}
			},
			address: {
				create: {
					street1: '20 Phan Chu Trinh St.',
					street2: 'Tran Hung Dao Ward',
					city: 'Hoan Kiem Dist.',
					state: 'Hanoi',
					postcode: '+94',
					country: 'Vietnam',
					shortened: '20 Phan Chu Trinh, Vietnam.'
				}
			}
		},
		include: {
			bankAccount: true,
			preference: true,
			address: true
		}
	});

	console.log(`Root user created: ${rootUser}`);

	var currency = await prisma.currency.create({
		data: {
			isoCode: 'MYR',
			name: 'Malaysian Ringgit',
			country: 'Malaysia',
			symbol: 'RM',
			symbolPosition: 'left'
		}
	});

	console.log(`Currency created: ${currency}`);

	var customer = await prisma.customer.create({
		data: {
			firstName: 'Henry',
			lastName: 'Noyce',
			email: 'henrynoyce@gmail.com',
			phoneNo: '+65 69699669',
			address: {
				create: {
					street1: '87 Ngo Gia Tu',
					street2: 'Hai Chau 1 Ward',
					city: 'Danang',
					state: 'Danang',
					postcode: '+94',
					country: 'Vietnam',
					shortened: '87 Ngo Gia Tu, Danang.'
				}
			}
		},
		include: {
			address: true
		}
	});

	console.log(`Customer created: ${customer}`);

	var invoice = await prisma.invoice.create({
		data: {
			invoiceNo: 'A00001',
			issuerName: 'Alice Brooke',
			taxRate: 0.01,
			discount: 0.0,
			grandTotal: 100_000,
			currencyIso: 'MYR',
			receiverName: 'Henry Noyce',
			receiverShortAddress: '87 Ngo Gia Tu, Danang.',
			receiverPhoneNo: '+65 69699669',
			invoiceItems: {
				create: [
					{
						name: 'Crystal Ingot',
						unitPrice: 10_000,
						quantity: 5,
						amount: 50_000
					},
					{
						name: 'Obsidian',
						unitPrice: 5_000,
						quantity: 4,
						amount: 20_000
					},
					{
						name: 'Skarn Depository',
						unitPrice: 30_000,
						quantity: 1,
						amount: 30_000
					}
				]
			}
		},
		include: {
			invoiceItems: true
		}
	});

	console.log(`Invoice created: ${invoice}`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})

	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
