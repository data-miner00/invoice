<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>History</title>
	<meta name="description" content="View your invoice history here." />
</svelte:head>

{#each data.invoices as news (news.invoiceNo)}
	<div>{news.invoiceNo}</div>
{/each}
