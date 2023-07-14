<script lang="ts">
	import Toolbar from '$lib/modules/toolbar/toolbar.svelte';
</script>

<div class="min-h-screen mx-auto w-[700px] relative">
	<Toolbar />
	<slot />
</div>
