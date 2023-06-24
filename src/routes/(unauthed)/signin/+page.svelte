<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { createNotification } from '$lib/stores/notifications';
	import { signIn } from '$lib/stores/user';

	let username = '';
	let password = '';

	let usernameErrors: string[] = [];
	let passwordErrors: string[] = [];

	async function onSubmit() {
		try {
			await signIn(username, password);
			await goto('/');
		} catch (error) {
			console.error(error);
			createNotification((error as Error).message);
		}
	}
</script>

<div class="md:w-72 w-full mx-auto my-10 bg-white dark:bg-gray-950 shadow p-4">
	<h1 class="mb-1">Sign In</h1>
	<p class="py-2">
		<span>Not a member?</span>
		<a href={`${base}/auth/signup`} class="underline text-blue-500">Sign up</a>
	</p>
	<form on:submit|preventDefault={onSubmit}>
		<div class="mb-2">
			<input
				class="w-full border border-slate-800"
				type="text"
				name="username"
				class:border-red-600={usernameErrors.length > 0}
				class:placeholder-red-600={usernameErrors.length > 0}
				placeholder="Username/Email"
				data-invalid={usernameErrors.length > 0}
				bind:value={username}
			/>
			{#each usernameErrors as usernameError}
				<span class="text-sm text-red-600">{usernameError}</span>
			{/each}
		</div>
		<div class="mb-2">
			<input
				class="w-full border border-slate-800"
				type="password"
				name="password"
				class:border-red-600={passwordErrors.length > 0}
				class:placeholder-red-600={passwordErrors.length > 0}
				placeholder="Password"
				data-invalid={passwordErrors.length > 0}
				bind:value={password}
			/>
			{#each passwordErrors as passwordError}
				<span class="text-sm text-red-600">{passwordError}</span>
			{/each}
		</div>
		<button class="btn btn-primary w-full">Sign in</button>
	</form>
</div>
