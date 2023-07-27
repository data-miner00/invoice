<script>
	import Navigator from '$lib/modules/navigator/navigator.svelte';
	import './styles.css';
	import '../app.css';
</script>

<div
	class="app max-w-screen-xl mx-auto border-l border-r border-solid border-gray-200 min-h-screen"
>
	<Navigator />
	<main>
		<slot />
	</main>
</div>
