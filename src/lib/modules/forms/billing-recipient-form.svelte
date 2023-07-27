<script lang="ts">
	import type { Address, BillingRecipient } from '$lib/shared/shared.types';
	import { billingRecipient$ } from '$lib/shared/shared.store';

	let name: string;
	let phone: string;
	let address = {} as Address;

	function onSubmit() {
		const billingRecipient: BillingRecipient = {
			name,
			phoneNo: phone,
			address
		};

		console.log(billingRecipient);

		billingRecipient$.set(billingRecipient);
	}
</script>

<form name="recipientForm" on:submit={onSubmit}>
	<input type="text" name="recipientName" placeholder="Name" bind:value={name} />
	<input type="text" name="recipientPhone" placeholder="Phone" bind:value={phone} />

	<fieldset>
		<legend>Address</legend>
		<input type="text" placeholder="First Line" bind:value={address.firstLine} />
		<input type="text" placeholder="Second Line" bind:value={address.secondLine} />
		<input type="text" placeholder="Third Line" bind:value={address.thirdLine} />
		<input type="text" placeholder="Postcode" bind:value={address.postcode} />
		<input type="text" placeholder="State" bind:value={address.state} />
		<input type="text" placeholder="Country" bind:value={address.country} />
		<input type="text" placeholder="Shortened" bind:value={address.shortened} />
	</fieldset>
	<button>Submit</button>
</form>

<style>
	form {
		@apply border border-solid border-pink-400 p-4;
	}

	fieldset {
		@apply border border-solid border-pink-400 p-4 relative;
	}

	legend {
		@apply absolute top-0 left-0;
	}

	button {
		@apply py-1 rounded border border-solid border-purple-400;
	}
</style>
