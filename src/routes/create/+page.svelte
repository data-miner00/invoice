<script lang="ts">
	import MasterForm from '$lib/modules/forms/master-form.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		console.log(data.products);
	});
</script>

<section class="bg-pink-400 py-10">
	<h1 class="text-4xl text-center">Create an invoice</h1>
</section>

<MasterForm />
