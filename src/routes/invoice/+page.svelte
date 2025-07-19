<script lang="ts">
	import { formatDate, formatIndex } from '$lib/shared/shared.utils';
	import '$lib/modules/themes/default.css';
	import Toolbar from '$lib/modules/toolbar/toolbar.svelte';
	import { CrossIcon, PlusIcon, CheckIcon } from '$lib/shared/icons';
	import { invoice$, individuals$, billingRecipient$, items$ } from '$lib/shared/shared.store';

	$: formattedInvoiceNo = formatIndex($invoice$.invoiceNo.index, $invoice$.invoiceNo.prefix, 4);
	$: formattedDate = formatDate($invoice$.date);

	$: individual = $individuals$.at(0)!;

	$: billingReceiver = $billingRecipient$;

	$: subtotal = $items$.map((x) => x.quantity * x.unitPrice).reduce((x, y) => x + y);

	$: taxAmt = (subtotal * $invoice$.payable.tax.amount) / 100;
	$: total = subtotal + taxAmt;

	function addItem(_: Event) {
		items$.update((items) => [
			...items,
			{
				id: (items.at(-1)?.id ?? 0) + 1,
				name: newItemName,
				quantity: newItemQuantity,
				unitPrice: newItemUnitPrice
			}
		]);

		resetInput();
	}

	let isEditing = false;
	let isEntryInputOpen = false;
	let newItemName = '';
	let newItemQuantity = 1;
	let newItemUnitPrice = 0;
	$: newItemTotalPrice = newItemQuantity * newItemUnitPrice;

	function toggleEntryInput() {
		isEntryInputOpen = !isEntryInputOpen;
	}

	let nameInputElement: HTMLInputElement;
	let quantityInputElement: HTMLInputElement;
	let unitPriceInputElement: HTMLInputElement;

	function resetInput() {
		newItemName = '';
		newItemQuantity = 0;
		newItemUnitPrice = 0;
		nameInputElement.value = '';
		quantityInputElement.value = '';
		unitPriceInputElement.value = '';
	}

	function editItem() {}

	function removeItem(id: number) {
		items$.update((items) => items.filter((x) => x.id !== id));
	}
</script>

<Toolbar bind:isEditing />

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
				{#each $items$ as item}
					<tr class="entry">
						<td>{item.name}</td>
						<td>{item.quantity}</td>
						<td><span>{$invoice$.currency.symbol}</span>{item.unitPrice}</td>
						<td
							><span>{$invoice$.currency.symbol}</span>{(item.quantity * item.unitPrice).toFixed(
								2
							)}</td
						>
						{#if isEditing}
							<div class="entry-actions">
								<button on:click={editItem}><CheckIcon size={20} /></button>
								<button on:click={() => removeItem(item.id)}><CrossIcon size={18} /></button>
							</div>
						{/if}
					</tr>
				{/each}

				{#if isEditing}
					{#if isEntryInputOpen}
						<tr class="entry-input-group" on:keyup={console.log}>
							<td>
								<input
									type="text"
									name="entry-name"
									placeholder="Insert item name"
									on:input={(e) => {
										newItemName = e.currentTarget.value;
									}}
									bind:this={nameInputElement}
									required
								/>
							</td>
							<td>
								<input
									type="number"
									name="quantity"
									on:input={(e) => {
										newItemQuantity = e.currentTarget.valueAsNumber;
									}}
									bind:this={quantityInputElement}
									required
								/>
							</td>
							<td>
								<span class="block my-auto">{$invoice$.currency.symbol}</span>
								<input
									type="number"
									name="unit-price"
									on:input={(e) => {
										newItemUnitPrice = e.currentTarget.valueAsNumber;
									}}
									bind:this={unitPriceInputElement}
									required
									step="0.01"
								/>
							</td>
							<td><span>{$invoice$.currency.symbol}</span>{newItemTotalPrice.toFixed(2)}</td>
							<div class="input-group-control">
								<button on:click={addItem}><CheckIcon size={20} /></button>
								<button on:click={toggleEntryInput}><CrossIcon size={18} /></button>
							</div>
						</tr>
					{:else}
						<tr>
							<td colspan="4">
								<button class="add-button" on:click={toggleEntryInput}>
									<PlusIcon />
								</button>
							</td>
						</tr>
					{/if}
				{/if}

				<tr>
					<td />
					<td />
					<td class="subtotal">Subtotal</td>
					<td><span>{$invoice$.currency.symbol}</span>{subtotal.toFixed(2)}</td>
				</tr>
				<tr>
					<td />
					<td />
					<td class="tax">Tax ({$invoice$.payable.tax.amount}%)</td>
					<td><span>{$invoice$.currency.symbol}</span>{taxAmt}</td>
				</tr>
				<tr>
					<td />
					<td />
					<td class="total">Total</td>
					<td class="total">{$invoice$.currency.symbol}{total.toFixed(2)}</td>
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
