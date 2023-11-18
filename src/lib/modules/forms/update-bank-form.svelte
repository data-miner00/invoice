<script lang="ts">
	import { enhance } from '$app/forms';

	export let actionUrl: string;
	export let bankRecordId: string;
	export let bankName: string;
	export let bankCountry: string;
	export let accountHolder: string;
	export let accountNo: string;

	let dialogRef: HTMLDialogElement;

	export function showDialog() {
		dialogRef.show();
	}

	function closeDialog() {
		dialogRef.close();
	}
</script>

<dialog bind:this={dialogRef} id="edit-bank-dialog" class="modal">
	<div class="modal-box w-11/12 max-w-4xl">
		<h3 class="font-bold text-lg">Edit Bank Info</h3>

		<form method="POST" action={actionUrl} use:enhance>
			<!-- hidden input must not be disabled, else the value will not include in form data -->
			<input name="id" type="text" class="hidden" value={bankRecordId} required />

			<div class="form-control w-full max-w-xs">
				<label class="label" for="bankName">
					<span class="label-text">Bank Name</span>
				</label>
				<input
					name="bankName"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={bankName}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="bankCountry">
					<span class="label-text">Bank Country</span>
				</label>
				<input
					name="bankCountry"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={bankCountry}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="accountHolder">
					<span class="label-text">Account Holder</span>
				</label>
				<input
					name="accountHolder"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={accountHolder}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="accountNo">
					<span class="label-text">Account No.</span>
				</label>
				<input
					name="accountNo"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={accountNo}
					required
				/>
			</div>

			<div class="modal-action">
				<button class="btn btn-primary" on:click={closeDialog}>Save</button>
				<form on:submit|preventDefault={closeDialog}>
					<button class="btn btn-secondary">Close</button>
				</form>
			</div>
		</form>
	</div>
</dialog>
