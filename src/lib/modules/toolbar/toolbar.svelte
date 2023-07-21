<script lang="ts">
	export let isEditing: boolean;
	const toggleEditingMode = () => (isEditing = !isEditing);
</script>

<aside class="absolute border border-gray-200 border-solid rounded -left-32 top-10 p-2">
	<div>
		<ul>
			<li><button>Add Item</button></li>
			<li><button>Change User</button></li>
			<li><button on:click={toggleEditingMode}>Edit Elements</button></li>
			<li><button>Print</button></li>
			<li><button>Save</button></li>
		</ul>
	</div>
</aside>
