<script lang="ts">
	import AddCustomerForm from '$lib/modules/forms/add-customer-form.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let form: AddCustomerForm;
</script>

<div class="p-4 flex gap-4">
	<div class="overflow-x-auto max-w-screen-xl p-4 border border-solid border-gray-100">
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Contacts</th>
					<th>Address</th>
					<th>Created At</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each data.customers as customer (customer.id)}
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img
											src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">{customer.firstName} {customer.lastName}</div>
									<div class="text-sm opacity-50">{customer.address?.country}</div>
								</div>
							</div>
						</td>
						<td>
							{customer.email}
							<br />
							<span class="badge badge-ghost badge-sm">{customer.phoneNo}</span>
						</td>
						<td>{customer.address?.shortened}</td>
						<td>{customer.createdAt.toDateString()}</td>
						<td>
							<button class="btn btn-ghost btn-xs">details</button>
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th>Name</th>
					<th>Contacts</th>
					<th>Address</th>
					<th>Created At</th>
					<th />
				</tr>
			</tfoot>
		</table>
	</div>

	<button class="btn" on:click={() => form.openDialog()}>Add Customer</button>

	<AddCustomerForm bind:this={form} />
</div>
