<script lang="ts">
	import type { User } from '@prisma/client';
	import { loggedInUser$ } from '$lib/shared/shared.store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		if (data.user) {
			loggedInUser$.set(data.user);
		}
	});

	let invoiceVolume = data.invoices.reduce((acc, invoice) => acc + invoice.grandTotal, 0);
</script>

<div class="px-4">
	<h1 class="text-3xl">Welcome {data.user?.firstName} {data.user?.lastName}</h1>
	<div class="flex gap-10">
		<div class="rounded bg-orange-300 px-10 py-6">
			Customers - {data.customers.length}
		</div>
		<div class="rounded bg-blue-300 px-10 py-6">
			Addresses - {data.addresses.length}
		</div>
		<div class="rounded bg-purple-300 px-10 py-6">
			Invoices - {data.invoices.length}
		</div>
		<div class="rounded bg-yellow-300 px-10 py-6">
			Invoices Total - {invoiceVolume.toLocaleString('en-US', {
				style: 'currency',
				currency: 'MYR'
			})}
		</div>
	</div>

	<div>
		<h2 class="text-xl">Recent Invoices</h2>

		<ul class="flex flex-col gap-1">
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
		</ul>
	</div>

	<div>
		<h2 class="text-xl">Audit Logs</h2>
		<ul class="flex flex-col gap-1">
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
			<li>
				<div class="border border-solid border-black rounded h-10 w-32" />
			</li>
		</ul>
	</div>
</div>
