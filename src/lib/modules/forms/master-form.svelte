<script lang="ts">
	import { onMount } from 'svelte';
	import type { Address, BankAccount, BillingItem } from '$lib/shared/shared.types';

	let fromName: string;
	let fromPhone: string;
	let toName: string;
	let toPhone: string;
	let invoiceNumber: string;
	let purchaseOrder: string;
	let fromAddress = {} as Address;
	let toAddress = {} as Address;
	let fromBankAccount = {} as BankAccount;
	let toBankAccount = {} as BankAccount;
	let currency: string;
	let invoiceDate: Date;
	let dueDate: Date;
	let notes: string;
	let tax: number;
	let discount: number;
	let shippingFee: number;
	let billingItems: Array<BillingItem> = [];

	let form: HTMLFormElement;
	let addItemForm: HTMLFormElement;
	let invoiceDateInput: HTMLInputElement;
	let dueDateInput: HTMLInputElement;

	let itemNameInput: HTMLInputElement;
	let itemQuantityInput: HTMLInputElement;
	let itemUnitPriceInput: HTMLInputElement;

	function onSubmit(_: Event) {
		const formData = new FormData(form);
		formData.forEach((val, key) => console.log(val, ' ', key));

		const info = {
			metadata: {
				invoiceNumber,
				purchaseOrder,
				currency,
				tax,
				discount,
				shippingFee,
				invoiceDate,
				dueDate,
				notes
			},
			issuer: {
				name: fromName,
				phone: fromPhone,
				address: fromAddress
			},
			receiver: {
				name: toName,
				phone: toPhone,
				address: toAddress
			}
		};

		console.log(info);
	}

	function addItem() {
		billingItems = [
			...billingItems,
			{
				id: 0,
				name: itemNameInput.value,
				quantity: itemQuantityInput.valueAsNumber,
				unitPrice: itemUnitPriceInput.valueAsNumber
			}
		];

		addItemForm.reset();
	}

	onMount(() => {
		invoiceDateInput.valueAsDate = new Date();
	});
</script>

<form
	bind:this={form}
	on:submit|preventDefault={onSubmit}
	class="border-gray-200 rounded border-solid border p-4 overflow-hidden"
>
	<fieldset>
		<legend>General</legend>
		<div class="flex gap-4">
			<div class="flex flex-col w-40">
				<label for="invoice-no" class="mb-2">Invoice number</label>
				<input bind:value={invoiceNumber} type="text" name="invoice-no" required />
			</div>
			<div class="flex flex-col w-40">
				<label for="purchase-no" class="mb-2">Purchase number</label>
				<input bind:value={purchaseOrder} type="text" name="purchase-no" required />
			</div>
			<div class="flex flex-col w-40">
				<label for="invoice-no" class="mb-2">Invoice date</label>
				<input
					bind:this={invoiceDateInput}
					bind:value={invoiceDate}
					type="date"
					name="invoice-no"
					required
				/>
			</div>
			<div class="flex flex-col w-40">
				<label for="purchase-no" class="mb-2">Due date</label>
				<input bind:this={dueDateInput} bind:value={dueDate} type="date" name="due-date" required />
			</div>
		</div>
		<div class="flex gap-4">
			<div class="flex flex-col w-40">
				<label for="notes">Notes</label>
				<input bind:value={notes} name="notes" type="text" />
			</div>
			<div class="flex flex-col w-40">
				<label for="tax">Tax</label>
				<input bind:value={tax} name="tax" type="text" />
			</div>
			<div class="flex flex-col w-40">
				<label for="discount">Discount</label>
				<input bind:value={discount} name="discount" type="text" />
			</div>
			<div class="flex flex-col w-40">
				<label for="shipping-fee">Shipping fee</label>
				<input bind:value={shippingFee} name="shipping-fee" type="text" />
			</div>
			<div class="flex flex-col w-40">
				<label for="currency">Currency</label>
				<input bind:value={currency} name="currency" type="text" />
			</div>
		</div>
	</fieldset>

	<fieldset class="border border-solid border-pink-200">
		<legend>Invoice Issuer</legend>

		<div class="flex flex-col gap-4">
			<div>
				<label for="issuer-name">Name</label>
				<input bind:value={fromName} name="issuer-name" type="text" />
			</div>
			<div>
				<label for="issuer-phone">Phone</label>
				<input bind:value={fromPhone} name="issuer-phone" type="text" />
			</div>
			<fieldset class="border border-gray-100 border-solid">
				<legend>Bank Info</legend>
				<div class="flex">
					<div>
						<label for="issuer-bank-name">Bank Name</label>
						<input bind:value={fromBankAccount.bankName} type="text" name="issuer-bank-name" />
					</div>
					<div>
						<label for="issuer-bank-country">Bank Country</label>
						<input
							bind:value={fromBankAccount.bankCountry}
							type="text"
							name="issuer-bank-country"
						/>
					</div>
					<div>
						<label for="issuer-account-holder">Account Holder</label>
						<input
							bind:value={fromBankAccount.accountHolder}
							type="text"
							name="issuer-account-holder"
						/>
					</div>
					<div>
						<label for="issuer-account-number">Account Number</label>
						<input
							bind:value={fromBankAccount.accountNo}
							type="text"
							name="issuer-account-number"
						/>
					</div>
				</div>
			</fieldset>

			<fieldset class="border border-yellow-200 border-solid">
				<legend>Address</legend>
				<div class="flex">
					<div>
						<label for="issuer-address-first">First Line</label>
						<input bind:value={fromAddress.firstLine} name="issuer-address-first" type="text" />
					</div>
					<div>
						<label for="issuer-address-second">Second Line</label>
						<input bind:value={fromAddress.secondLine} name="issuer-address-second" type="text" />
					</div>
					<div>
						<label for="issuer-address-third">Third Line</label>
						<input bind:value={fromAddress.thirdLine} name="issuer-address-third" type="text" />
					</div>
					<div>
						<label for="issuer-address-postcode">Postcode</label>
						<input bind:value={fromAddress.postcode} name="issuer-address-postcode" type="text" />
					</div>
					<div>
						<label for="issuer-address-state">State</label>
						<input bind:value={fromAddress.state} name="issuer-address-state" type="text" />
					</div>
					<div>
						<label for="issuer-address-country">Country</label>
						<input bind:value={fromAddress.country} name="issuer-address-country" type="text" />
					</div>

					<div>
						<label for="issuer-address-shortened">Shortened</label>
						<input bind:value={fromAddress.shortened} name="issuer-address-shortened" type="text" />
					</div>
				</div>
			</fieldset>
		</div>
	</fieldset>

	<fieldset class="border border-solid border-blue-200">
		<legend>Invoice Recipient</legend>

		<div class="flex flex-col gap-4">
			<div>
				<label for="recipient-name">Name</label>
				<input bind:value={toName} name="recipient-name" type="text" />
			</div>
			<div>
				<label for="recipient-phone">Phone</label>
				<input bind:value={toPhone} name="recipient-phone" type="text" />
			</div>
			<fieldset class="border border-gray-100 border-solid">
				<legend>Bank Info</legend>
				<div class="flex">
					<div>
						<label for="recipient-bank-name">Bank Name</label>
						<input bind:value={toBankAccount.bankName} type="text" name="recipient-bank-name" />
					</div>
					<div>
						<label for="recipient-bank-country">Bank Country</label>
						<input
							bind:value={toBankAccount.bankCountry}
							type="text"
							name="recipient-bank-country"
						/>
					</div>
					<div>
						<label for="recipient-account-holder">Account Holder</label>
						<input
							bind:value={toBankAccount.accountHolder}
							type="text"
							name="recipient-account-holder"
						/>
					</div>
					<div>
						<label for="recipient-account-number">Account Number</label>
						<input
							bind:value={toBankAccount.accountNo}
							type="text"
							name="recipient-account-number"
						/>
					</div>
				</div>
			</fieldset>

			<fieldset class="border border-yellow-200 border-solid">
				<legend>Address</legend>
				<div class="flex">
					<div>
						<label for="recipient-address-first">First Line</label>
						<input bind:value={toAddress.firstLine} name="recipient-address-first" type="text" />
					</div>
					<div>
						<label for="recipient-address-second">Second Line</label>
						<input bind:value={toAddress.secondLine} name="recipient-address-second" type="text" />
					</div>
					<div>
						<label for="recipient-address-third">Third Line</label>
						<input bind:value={toAddress.thirdLine} name="recipient-address-third" type="text" />
					</div>
					<div>
						<label for="recipient-address-postcode">Postcode</label>
						<input bind:value={toAddress.postcode} name="recipient-address-postcode" type="text" />
					</div>
					<div>
						<label for="recipient-address-state">State</label>
						<input bind:value={toAddress.state} name="recipient-address-state" type="text" />
					</div>
					<div>
						<label for="recipient-address-country">Country</label>
						<input bind:value={toAddress.country} name="recipient-address-country" type="text" />
					</div>
					<div>
						<label for="recipient-address-shortened">Shortened</label>
						<input
							bind:value={toAddress.shortened}
							name="recipient-address-shortened"
							type="text"
						/>
					</div>
				</div>
			</fieldset>
		</div>
	</fieldset>

	<fieldset class="border border-blue border-solid">
		<legend>Items</legend>
		<table>
			<thead>
				<tr>
					<th>No</th>
					<th>Name</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{#if billingItems.length > 0}
					{#each billingItems as item}
						<tr class="">
							<td>{item.name}</td>
							<td>{item.quantity}</td>
							<td>{item.unitPrice}</td>
							<td>{item.quantity * item.unitPrice}</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="4">There is no data yet</td>
					</tr>
				{/if}
			</tbody>
		</table>

		<form bind:this={addItemForm} on:submit|preventDefault={addItem}>
			<input required bind:this={itemNameInput} type="text" placeholder="Name" />
			<input required type="number" bind:this={itemQuantityInput} placeholder="Quantity" />
			<input
				required
				type="number"
				step=".01"
				bind:this={itemUnitPriceInput}
				placeholder="Unit price"
			/>

			<input type="submit" value="Add" />
		</form>
	</fieldset>

	<input type="submit" value="Create" />
</form>

<style>
	input {
		@apply border-gray-100 border-solid border rounded-lg py-2 px-3;
	}
	input:focus {
		@apply outline-dotted;
	}
</style>
