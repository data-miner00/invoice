<script lang="ts">
	import { enhance } from '$app/forms';

	export let actionUrl: string;
	export let addressId: string;
	export let street1: string;
	export let street2: string;
	export let city: string;
	export let state: string;
	export let postcode: string;
	export let country: string;
	export let shortened: string;

	let dialogRef: HTMLDialogElement;

	export function showDialog() {
		dialogRef.show();
	}

	function closeDialog() {
		dialogRef.close();
	}
</script>

<dialog bind:this={dialogRef} id="edit-address-dialog" class="modal">
	<div class="modal-box w-11/12 max-w-4xl">
		<h3 class="font-bold text-lg">Edit Address</h3>

		<form method="POST" action={actionUrl} use:enhance>
			<!-- hidden input must not be disabled, else the value will not include in form data -->
			<input name="id" type="text" class="hidden" value={addressId} required />

			<div class="form-control w-full max-w-xs">
				<label class="label" for="street1">
					<span class="label-text">Street 1</span>
				</label>
				<input
					name="street1"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={street1}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="street2">
					<span class="label-text">Street 2</span>
				</label>
				<input
					name="street2"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={street2}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="city">
					<span class="label-text">City</span>
				</label>
				<input
					name="city"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={city}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="state">
					<span class="label-text">State</span>
				</label>
				<input
					name="state"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={state}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="postcode">
					<span class="label-text">Postcode</span>
				</label>
				<input
					name="postcode"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={postcode}
					required
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="country">
					<span class="label-text">Country</span>
				</label>
				<input
					name="country"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={country}
					required
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="shortened">
					<span class="label-text">Shortened Address</span>
				</label>
				<input
					name="shortened"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={shortened}
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
