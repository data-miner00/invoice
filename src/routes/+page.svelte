<script lang="ts">
	import type { User } from '@prisma/client';
	import { loggedInUser$ } from '$lib/shared/shared.store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		if (data.user) {
			loggedInUser$.set(data.user);
		}
	});
</script>

<div>Homepage</div>
