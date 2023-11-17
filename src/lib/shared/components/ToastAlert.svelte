<script lang="ts">
	import { fade } from 'svelte/transition';
	import { notifications$ } from '../shared.store';
</script>

{#if $notifications$}
	<div class="toast toast-top toast-center">
		{#each $notifications$ as notification}
			{#if notification.type == 'success'}
				<div class="alert alert-success" transition:fade>
					<span>{notification.text}</span>
				</div>
			{/if}
			{#if notification.type == 'error'}
				<div class="alert alert-error" transition:fade>
					<span>{notification.text}</span>
				</div>
			{/if}
		{/each}
	</div>
{/if}
