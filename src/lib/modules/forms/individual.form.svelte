<script lang="ts">
	import type { Address, BankAccount, Individual } from '$lib/shared/shared.types';
	import { individuals$ } from '$lib/shared/shared.store';

	let name: string;
	let phone: string;
	let bankAccount = {} as BankAccount;
	let address = {} as Address;

	function validateForm() {
		const individual: Individual = {
			name,
			phoneNo: phone,
			bankAccount,
			address
		};

		console.log(individual);

		individuals$.update((_) => [individual]);
	}
</script>

<form name="individualForm" on:submit={validateForm}>
	<input name="individualName" type="text" placeholder="Name" bind:value={name} />
	<input name="individualPhone" type="text" placeholder="Phone" bind:value={phone} />
	<fieldset>
		<legend>Bank Info</legend>
		<input type="text" placeholder="Bank Name" bind:value={bankAccount.bankName} />
		<input type="text" placeholder="Country" bind:value={bankAccount.bankCountry} />
		<input type="text" placeholder="Account Holder" bind:value={bankAccount.accountHolder} />
		<input type="text" placeholder="Account Number" bind:value={bankAccount.accountNo} />
	</fieldset>

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
		@apply border border-solid border-black p-4;
	}

	fieldset {
		@apply border border-solid border-black p-4 relative;
	}

	legend {
		@apply absolute top-0 left-0;
	}

	button {
		@apply py-1 rounded border border-solid border-black;
	}
</style>
