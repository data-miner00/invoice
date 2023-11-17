<script>
	import Header from '$lib/modules/header/header.svelte';
	import './styles.css';
	import '../app.css';
	import ToastAlert from '$lib/shared/components/ToastAlert.svelte';
</script>

<Header />
<ToastAlert />

<slot />
