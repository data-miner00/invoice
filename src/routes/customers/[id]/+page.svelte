<script lang="ts">
	import UpdateCustomerForm from '$lib/modules/forms/update-customer-form.svelte';
	import type { PageData } from './$types'; // Very important to import as type!!

	export let data: PageData;

	let customer = data.customer;

	let customerDialog: UpdateCustomerForm;
</script>

<div class="p-4">
	<h1 class="text-2xl font-bold mb-4">Customer Details</h1>
	<div class="mb-4">
		<strong>Name:</strong>
		{customer?.firstName}
		{customer?.lastName}
	</div>
	<div class="mb-4">
		<strong>Email:</strong>
		{customer?.email}
	</div>
	<div class="mb-4">
		<strong>Phone:</strong>
		{customer?.phoneNo}
	</div>
	<div class="mb-4">
		<strong>Address:</strong>
		{customer?.address?.shortened ?? 'N/A'}
	</div>
	<div class="mb-4">
		<strong>Created At:</strong>
		{customer?.createdAt.toDateString()}
	</div>

	<button class="btn btn-secondary" on:click={() => customerDialog.showCustomerDialog()}
		>Edit</button
	>
</div>

<UpdateCustomerForm
	bind:this={customerDialog}
	customerId={customer?.id ?? ''}
	actionUrl="?/customer"
	firstName={customer?.firstName ?? ''}
	lastName={customer?.lastName ?? ''}
	email={customer?.email ?? ''}
	phoneNo={customer?.phoneNo ?? ''}
/>
