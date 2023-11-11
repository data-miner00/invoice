<script lang="ts">
	export let form;
</script>

<form method="POST" action="default">
	<p>{form?.message || ''}</p>
	<input type="text" placeholder="username" />
	<input type="password" placeholder="password" />
	<input type="submit" value="Login" />
</form>
