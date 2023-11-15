<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let profile = data.profile;
	let address = data.address;
	let bankAccount = data.bankAccount;
</script>

<section class="px-4">
	<h1 class="text-2xl font-bold mb-4">Profile</h1>

	<div class="font-semibold">{profile?.firstName} {profile?.lastName}</div>

	<div class="divider" />

	<label for="current-email" class="font-semibold">Email</label>
	<div>alice@gmail.com</div>

	<label for="current-email" class="font-semibold">Role</label>
	<div>{profile?.role}</div>

	<label for="current-email" class="font-semibold">Password</label>
	<div>{profile?.password}</div>

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
