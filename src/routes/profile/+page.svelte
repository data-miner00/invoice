<script lang="ts">
	import type { PageData } from './$types';
	import UpdateProfileForm from '$lib/modules/forms/update-profile-form.svelte';
	import UpdateAddressForm from '$lib/modules/forms/update-address-form.svelte';
	import UpdateBankForm from '$lib/modules/forms/update-bank-form.svelte';

	export let data: PageData;

	let profile = data.profile;
	let address = data.address;
	let bankAccount = data.bankAccount;

	let profileDialog: UpdateProfileForm;
	let addressDialog: UpdateAddressForm;
	let bankDialog: UpdateBankForm;
</script>

<section class="px-4">
	<h1 class="text-2xl font-bold mb-4">Profile</h1>

	<div class="font-semibold">{profile?.firstName} {profile?.lastName}</div>

	<div class="divider" />

	<button class="btn" on:click={() => profileDialog.showProfileDialog()}>Edit profile</button><br />

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
	<button class="btn" on:click={() => addressDialog.showDialog()}>Edit Address</button><br />

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
	<label for="current-email" class="font-semibold">Country</label>
	<div>{address?.country ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Shortened</label>
	<div>{address?.shortened ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Created At</label>
	<div>{address?.createdAt ?? 'N/A'}</div>
	<label for="current-email" class="font-semibold">Modified At</label>
	<div>{address?.modifiedAt ?? 'N/A'}</div>

	<div class="divider" />

	<h2 class="text-2xl font-bold mb-4">Bank Account</h2>
	<button class="btn" on:click={() => bankDialog.showDialog()}>Edit Bank</button><br />

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

<UpdateProfileForm
	bind:this={profileDialog}
	actionUrl="?/user"
	profileId={profile?.id ?? ''}
	username={profile?.username ?? ''}
	firstName={profile?.firstName ?? ''}
	lastName={profile?.lastName ?? ''}
	email={profile?.email ?? ''}
	phoneNo={profile?.phoneNo ?? ''}
	password={profile?.password ?? ''}
/>

<UpdateAddressForm
	bind:this={addressDialog}
	actionUrl="?/address"
	addressId={address?.id ?? ''}
	street1={address?.street1 ?? ''}
	street2={address?.street2 ?? ''}
	city={address?.city ?? ''}
	state={address?.state ?? ''}
	postcode={address?.postcode ?? ''}
	country={address?.country ?? ''}
	shortened={address?.shortened ?? ''}
/>

<UpdateBankForm
	bind:this={bankDialog}
	actionUrl="?/bank"
	bankRecordId={bankAccount?.id ?? ''}
	bankName={bankAccount?.bankName ?? ''}
	bankCountry={bankAccount?.bankCountry ?? ''}
	accountHolder={bankAccount?.accountHolder ?? ''}
	accountNo={bankAccount?.accountNo ?? ''}
/>
