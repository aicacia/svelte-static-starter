<svelte:options immutable />

<script lang="ts">
	import BaseLayout from './BaseLayout.svelte';
</script>

<BaseLayout>
	<div class="container mx-auto h-full overflow-hidden"><slot /></div>
</BaseLayout>
