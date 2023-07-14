<script lang="ts">
	import type {
		Address,
		BankAccount,
		BillingItem,
		AppSettings,
		InvoiceTemplate,
		Company,
		Individual,
		Invoice,
		BillingRecipient
	} from '$lib/shared/shared.types';
	import { formatDate, formatIndex } from '$lib/shared/shared.utils';
	import '$lib/modules/themes/default.css';

	let invoice: Invoice = {
		index: 1,
		date: new Date(),
		tax: 0,
		NoFmt: '',
		currency: {
			symbol: 'RM',
			code: 'MYR',
			country: 'Malaysia'
		}
	};

	$: formattedInvoiceNo = formatIndex(invoice.index, 'A', 4);
	$: formattedDate = formatDate(invoice.date);

	let individual: Individual = {
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
	};

	let billingReceiver: BillingRecipient = {
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
	};

	let items: BillingItem[] = [
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
	];

	$: subtotal = items.map((x) => x.quantity * x.unitPrice).reduce((x, y) => x + y);

	$: taxAmt = (subtotal * invoice.tax) / 100;
	$: total = subtotal + taxAmt;
</script>

<svelte:head>
	<title>Invoice</title>
	<meta name="description" content="Next-gen Invoice Generator" />
</svelte:head>

<section class="invoice">
	<header>
		<div class="title">Invoice</div>
	</header>

	<div class="metadata">
		<div class="recipient">
			<h2>Billed to:</h2>
			<address>
				<div>{billingReceiver.name}</div>
				<div>{billingReceiver.phoneNo}</div>
				<div>{billingReceiver.address.shortened}</div>
			</address>
		</div>

		<div class="info">
			<div>Invoice No. {formattedInvoiceNo}</div>
			<div>{formattedDate}</div>
		</div>
	</div>

	<div class="item-list">
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{#each items as item}
					<tr class="entry">
						<td>{item.name}</td>
						<td>{item.quantity}</td>
						<td><span>{invoice.currency.symbol}</span>{item.unitPrice}</td>
						<td><span>{invoice.currency.symbol}</span>{item.quantity * item.unitPrice}</td>
					</tr>
				{/each}
				<tr>
					<td />
					<td />
					<td class="subtotal">Subtotal</td>
					<td><span>{invoice.currency.symbol}</span>{subtotal}</td>
				</tr>
				<tr>
					<td />
					<td />
					<td class="tax">Tax ({invoice.tax}%)</td>
					<td><span>{invoice.currency.symbol}</span>{taxAmt}</td>
				</tr>
				<tr>
					<td />
					<td />
					<td class="total">Total</td>
					<td class="total">{invoice.currency.symbol}{total}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="bottom-container">
		<div class="thanks">Thank you!</div>
		<footer>
			<div class="payment-info">
				<h2>Payment Information</h2>
				<div>{individual.bankAccount.bankName}</div>
				<div>Account Name: {individual.bankAccount.accountHolder}</div>
				<div>Account No: {individual.bankAccount.accountNo}</div>
			</div>

			<div class="issuer-info">
				<div class="name">{individual.name}</div>
				<div>{individual.address.shortened}</div>
			</div>
		</footer>
	</div>
</section>
