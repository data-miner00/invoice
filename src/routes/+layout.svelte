<script lang="ts">
	import Header from '$lib/modules/header/header.svelte';
	import './styles.css';
	import '../app.css';
	import ToastAlert from '$lib/shared/components/ToastAlert.svelte';

	export let alert: HTMLDivElement;

	function handleAccept() {
		alert.classList.add('hidden');
	}
</script>

<Header />
<ToastAlert />

<slot />

<div class="alert" bind:this={alert}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		class="stroke-info shrink-0 w-6 h-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
	<span>we use cookies for no reason.</span>
	<div>
		<button class="btn btn-sm" on:click={handleAccept}>Deny</button>
		<button class="btn btn-sm btn-primary" on:click={handleAccept}>Accept</button>
	</div>
</div>
