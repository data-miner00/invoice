<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	let profile = data.profile;
	let address = data.address;
	let bankAccount = data.bankAccount;

	let profileDialogRef: HTMLDialogElement;
	let addressDialogRef: HTMLDialogElement;
	let bankDialogRef: HTMLDialogElement;

	function showProfileDialog() {
		profileDialogRef.show();
	}

	function closeProfileDialog() {
		profileDialogRef.close();
	}
</script>

<section class="px-4">
	<h1 class="text-2xl font-bold mb-4">Profile</h1>

	<div class="font-semibold">{profile?.firstName} {profile?.lastName}</div>

	<div class="divider" />

	<button class="btn" on:click={showProfileDialog}>Edit profile</button><br />

	<label for="username" class="font-semibold">Username</label>
	<div>{profile?.username}</div>

	<label for="current-email" class="font-semibold">Email</label>
	<div>{profile?.email}</div>

	<label for="current-email" class="font-semibold">Role</label>
	<div>{profile?.role}</div>

	<label for="current-email" class="font-semibold">Password</label>
	<div>{profile?.password}</div>

	<label for="current-email" class="font-semibold">Phone No.</label>
	<div>{profile?.phoneNo}</div>

	<label for="current-email" class="font-semibold">Created At</label>
	<div>{profile?.createdAt}</div>

	<label for="current-email" class="font-semibold">Modified At</label>
	<div>{profile?.modifiedAt}</div>

	<div class="divider" />

	<h2 class="text-2xl font-bold mb-4">Address</h2>

	<label for="current-email" class="font-semibold">Id</label>
	<div>{address?.id ?? 'N/A'}</div>

	<label for="current-email" class="font-semibold">Street 1</label>
	<div>{address?.street1 ?? 'N/A'}</div>

	<label for="current-email" class="font-semibold">Street 2</label>
	<div>{address?.street2 ?? 'N/A'}</div>

	<label for="current-email" class="font-semibold">City</label>
	<div>{address?.city ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">State</label>
	<div>{address?.state ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Postcode</label>
	<div>{address?.postcode ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Street 2</label>
	<div>{address?.country ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Shortened</label>
	<div>{address?.shortened ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Created At</label>
	<div>{address?.createdAt ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Modified At</label>
	<div>{address?.modifiedAt ?? 'N/A'}</div>

	<div class="divider" />

	<h2 class="text-2xl font-bold mb-4">Bank Account</h2>

	<label for="current-email" class="font-semibold">Id</label>
	<div>{bankAccount?.id ?? 'N/A'}</div>

	<label for="current-email" class="font-semibold">Bank Name</label>
	<div>{bankAccount?.bankName ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Bank country</label>
	<div>{bankAccount?.bankCountry ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Account Holder</label>
	<div>{bankAccount?.accountHolder ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Account No.</label>
	<div>{bankAccount?.accountNo ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Created At</label>
	<div>{bankAccount?.createdAt ?? 'N/A'}</div>

	<label for="current-email" class="font-semibold">Modified At</label>
	<div>{bankAccount?.modifiedAt ?? 'N/A'}</div>
</section>

<div class="h-4" />

<dialog bind:this={profileDialogRef} id="edit-profile-dialog" class="modal">
	<div class="modal-box w-11/12 max-w-4xl">
		<h3 class="font-bold text-lg">Edit Profile</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>

		<form method="POST" action="?/user" use:enhance>
			<!-- hidden input must not be disabled, else the value will not include in form data -->
			<input name="id" type="text" class="hidden" value={profile?.id} required />

			<div class="form-control w-full max-w-xs">
				<label class="label" for="username">
					<span class="label-text">Username</span>
				</label>
				<input
					name="username"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={profile?.username}
					required
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="first_name">
					<span class="label-text">First name</span>
				</label>
				<input
					name="first_name"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={profile?.firstName}
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
					value={profile?.lastName}
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
					value={profile?.email}
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
					value={profile?.phoneNo}
					required
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="password">
					<span class="label-text">Password</span>
				</label>
				<input
					name="password"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={profile?.password}
					required
				/>
			</div>

			<div class="modal-action">
				<button class="btn btn-primary" on:click={closeProfileDialog}>Save</button>
			</div>
		</form>
	</div>
</dialog>
