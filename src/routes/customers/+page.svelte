<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		console.log(data.customers);
	});

	type SampleData = {
		avatar: string;
		name: string;
		company: string;
		country: string;
		job: string;
		favoriteColor: string;
	};

	let samples: SampleData[] = [
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-2@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-3@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-4@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		},
		{
			avatar: 'https://daisyui.com/tailwind-css-component-profile-5@56w.png',
			name: 'Hart Hagerty',
			country: 'United States',
			company: 'Zemlak, Daniel and Leannon',
			job: 'Desktop Support Technician',
			favoriteColor: 'Purple'
		}
	];

	let dialogRef: HTMLDialogElement;

	function openDialog() {
		dialogRef.showModal();
	}

	function closeDialog() {
		dialogRef.close();
	}
</script>

<div class="p-4 flex gap-4">
	<div class="w-[400px] bg-gray-50 rounded-xl" />
	<div class="overflow-x-auto flex-1">
		<table class="table">
			<thead>
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each samples as sample}
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src={sample.avatar} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div class="font-bold">{sample.name}</div>
									<div class="text-sm opacity-50">{sample.country}</div>
								</div>
							</div>
						</td>
						<td>
							{sample.company}
							<br />
							<span class="badge badge-ghost badge-sm">{sample.job}</span>
						</td>
						<td>{sample.favoriteColor}</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</tfoot>
		</table>
	</div>

	<button class="btn" on:click={openDialog}>Add Customer</button>
	<dialog bind:this={dialogRef} id="add_customer" class="modal">
		<div class="modal-box w-11/12 max-w-4xl">
			<h3 class="font-bold text-lg">Add a customer</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>

			<form method="POST">
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
					<button class="btn btn-primary" on:click={closeDialog}> Add Customer </button>
				</div>
			</form>
		</div>
	</dialog>
</div>
