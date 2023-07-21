<script lang="ts">
	import IndividualForm from '$lib/modules/forms/individual.form.svelte';
	import BillingRecipientForm from '$lib/modules/forms/billingRecipient.form.svelte';
</script>

<ul class="p-32">
	<li>Create User</li>
	<li>Change User</li>
	<li>Edit User</li>
	<li>Select Invoice</li>
	<li>View History</li>
</ul>

<IndividualForm />

<BillingRecipientForm />
