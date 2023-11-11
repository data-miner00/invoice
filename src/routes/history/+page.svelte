<script lang="ts">
	export let data;
</script>

{#each data.invoices as news}
	<div>{news}</div>
{/each}
