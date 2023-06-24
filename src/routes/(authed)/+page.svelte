<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { signOut } from '$lib/stores/user';

	async function onSignOut() {
		signOut();
		await goto(`/signin`);
	}
</script>

<button class="btn primary" on:click={onSignOut}>Sign out</button>
