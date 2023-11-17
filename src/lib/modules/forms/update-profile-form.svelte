<script lang="ts">
	import { enhance } from '$app/forms';

	export let actionUrl: string;
	export let profileId: string;
	export let username: string;
	export let firstName: string;
	export let lastName: string;
	export let email: string;
	export let phoneNo: string;
	export let password: string;

	let profileDialogRef: HTMLDialogElement;

	export function showProfileDialog() {
		profileDialogRef.show();
	}

	function closeProfileDialog() {
		profileDialogRef.close();
	}
</script>

<dialog bind:this={profileDialogRef} id="edit-profile-dialog" class="modal">
	<div class="modal-box w-11/12 max-w-4xl">
		<h3 class="font-bold text-lg">Edit Profile</h3>

		<form method="POST" action={actionUrl} use:enhance>
			<!-- hidden input must not be disabled, else the value will not include in form data -->
			<input name="id" type="text" class="hidden" value={profileId} required />

			<div class="form-control w-full max-w-xs">
				<label class="label" for="username">
					<span class="label-text">Username</span>
				</label>
				<input
					name="username"
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full max-w-xs"
					value={username}
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
					value={firstName}
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
					value={lastName}
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
					value={email}
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
					value={phoneNo}
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
					value={password}
					required
				/>
			</div>

			<div class="modal-action">
				<button class="btn btn-primary" on:click={closeProfileDialog}>Save</button>
				<form on:submit|preventDefault={closeProfileDialog}>
					<button class="btn btn-secondary">Close</button>
				</form>
			</div>
		</form>
	</div>
</dialog>
