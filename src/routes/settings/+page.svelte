<script lang="ts">
	import type { PageData } from './$types';
	import { ChevronRightIcon } from '$lib/shared/icons';
	import { onMount } from 'svelte';

	export let data: PageData;
	let settings = data.settings;
	let initialSettings = '';

	// Interactions
	let selected = '';
	let taxRateInput = 0.0;
	let themeInput = '';
	let currencyInput = '';
	let formatInput = '';

	type SettingsViewModel = {
		taxRate: number;
		theme: string;
		currency: string;
		invoiceFormat: string;
	};

	onMount(() => {
		if (data.settings) {
			initialSettings = JSON.stringify(<SettingsViewModel>{
				taxRate: data.settings.taxRate,
				theme: data.settings.theme,
				currency: data.settings.currencyIso,
				invoiceFormat: data.settings.invoiceFormat
			});

			taxRateInput = data.settings.taxRate;
			themeInput = data.settings.theme;
			currencyInput = data.settings.currencyIso;
			formatInput = data.settings.invoiceFormat;
		}
	});

	$: settingsChanged =
		initialSettings !==
		JSON.stringify(<SettingsViewModel>{
			taxRate: taxRateInput,
			theme: themeInput,
			currency: currencyInput,
			invoiceFormat: formatInput
		});

	function selectSetting(setting: string) {
		selected = setting;
	}

	async function updateSettings() {
		const userId = 'c74d900f-5161-48d4-97bc-388a6bb761c3';

		const response = await fetch(`/api/user/${userId}/settings`, {
			method: 'POST',
			body: JSON.stringify(<SettingsViewModel>{
				taxRate: taxRateInput,
				theme: themeInput,
				currency: currencyInput,
				invoiceFormat: formatInput
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		const updatedSettings = await response.json();
		console.log(updatedSettings);
	}
</script>

<main class="flex">
	<section class="px-4 w-[400px] border-r border-solid border-gray-100">
		<h1 class="text-2xl font-bold mb-4">Settings</h1>
		<button on:click={() => selectSetting('tax')}>
			<div>Tax rate</div>
			<div class="text-sm text-gray-600">{settings?.taxRate}</div>
			<span>
				<ChevronRightIcon />
			</span>
		</button>
		<button on:click={() => selectSetting('theme')}>
			<div>Theme</div>
			<div class="text-sm text-gray-600">{settings?.theme}</div>
			<span>
				<ChevronRightIcon />
			</span>
		</button>
		<button on:click={() => selectSetting('currency')}>
			<div>Currency</div>
			<div class="text-sm text-gray-600">{settings?.currencyIso}</div>
			<span>
				<ChevronRightIcon />
			</span>
		</button>
		<button on:click={() => selectSetting('format')}>
			<div>Invoice format</div>
			<div class="text-sm text-gray-600">{settings?.invoiceFormat}</div>
			<span>
				<ChevronRightIcon />
			</span>
		</button>
	</section>

	{#if selected}
		<form class="p-4 w-[400px] border-r border-solid border-gray-100">
			{#if selected === 'tax'}
				<h2 class="text-xl font-semibold mb-2">Tax Rate</h2>

				<input
					bind:value={taxRateInput}
					type="number"
					placeholder="Tax rate"
					class="input input-bordered w-full max-w-xs"
					step="0.01"
				/>
			{:else if selected === 'theme'}
				<h2 class="text-xl font-semibold mb-2">Application Theme</h2>

				<input
					bind:value={themeInput}
					type="text"
					placeholder="Theme"
					class="input input-bordered w-full max-w-xs"
				/>
			{:else if selected === 'currency'}
				<h2 class="text-xl font-semibold mb-2">Currency</h2>

				<input
					bind:value={currencyInput}
					type="text"
					placeholder="Currency ISO"
					class="input input-bordered w-full max-w-xs"
				/>
			{:else}
				<h2 class="text-xl font-semibold mb-2">Invoice No. Format</h2>

				<input
					bind:value={formatInput}
					type="text"
					placeholder="Invoice Format"
					class="input input-bordered w-full max-w-xs"
				/>
			{/if}
			<button
				on:click={updateSettings}
				class={`mt-4 btn ${settingsChanged ?? 'btn-primary'}`}
				disabled={!settingsChanged}
			>
				Update
			</button>
		</form>
	{/if}
</main>

<style scoped>
	button {
		@apply py-2 block text-left relative w-full;
	}

	button:not(:last-of-type) {
		@apply border-b border-solid border-gray-100;
	}

	span {
		@apply absolute right-4 top-6;
	}
</style>
