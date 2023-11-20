<script lang="ts">
	let dialogRef: HTMLDialogElement;

	export function openDialog() {
		dialogRef.showModal();
	}

	function closeDialog() {
		dialogRef.close();
	}
</script>

<dialog bind:this={dialogRef} id="add_customer" class="modal">
	<div class="modal-box w-11/12 max-w-4xl">
		<h3 class="font-bold text-lg">Add a customer</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>

		<form method="POST" on:submit={closeDialog}>
			<fieldset class="p-4 flex flex-wrap gap-4 border border-solid border-gray-100">
				<legend>Basic Info</legend>

				<div class="form-control w-full max-w-xs">
					<label class="label" for="first_name">
						<span class="label-text">First name</span>
					</label>
					<input
						name="first_name"
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="last_name">
						<span class="label-text">Last name</span>
					</label>
					<input
						name="last_name"
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						name="email"
						type="email"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="phone">
						<span class="label-text">Phone</span>
					</label>
					<input
						name="phone"
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
						required
					/>
				</div>
			</fieldset>

			<fieldset class="p-4 flex flex-wrap gap-4 border border-solid border-gray-100">
				<legend>Address Info</legend>

				<div class="form-control w-full max-w-xs">
					<label class="label" for="street1">
						<span class="label-text">Street 1</span>
					</label>
					<input
						name="street1"
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
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
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="shortened">
						<span class="label-text">Shortened</span>
					</label>
					<input
						name="shortened"
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
						required
					/>
				</div>
			</fieldset>

			<div class="modal-action">
				<button class="btn btn-primary"> Add Customer </button>
			</div>
		</form>
	</div>
</dialog>
