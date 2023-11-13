<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>Tax {data.settings?.taxRate}</div>
<div>Theme {data.settings?.theme}</div>
<div>Currency</div>
