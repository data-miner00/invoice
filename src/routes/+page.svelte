<script lang="ts">
	import Header from '$lib/modules/header/header.svelte';
</script>

<Header />
<h1 class="text-center text-7xl font-bold">
	Free
	<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500"
		>invoice</span
	>
	generator
</h1>
<p class="text-center py-6 text-lg max-w-screen-sm mx-auto">
	Create an invoice online customized for your brand or business using an personally customized free
	invoice template.
</p>

<div class="mx-auto w-fit">
	<a
		class="px-5 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold text-lg rounded"
		href="/create"
	>
		Create Invoice
	</a>
</div>
