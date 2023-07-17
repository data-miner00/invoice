<script>
	import Navigator from '$lib/modules/navigator/navigator.svelte';
	import './styles.css';
	import '../app.css';
</script>

<div class="app">
	<Navigator />
	<main>
		<slot />
	</main>
</div>
