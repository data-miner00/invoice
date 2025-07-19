<script lang="ts">
	import type { PageData } from './$types'; // Very important to import as type!!

	export let data: PageData;

	let customer = data.customer;
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

	<button class="btn btn-secondary">Edit</button>
</div>
