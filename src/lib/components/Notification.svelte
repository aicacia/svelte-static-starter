<svelte:options immutable />

<script lang="ts">
	import { removeNotification, type INotification } from '$lib/stores/notifications';
	import { XCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-svelte';

	export let notification: INotification;

	function onDelete() {
		removeNotification(notification.id);
	}
</script>

<div
	class="as-flex as-items-center as-py-2 as-px-3 as-m-1 as-cursor-pointer as-shadow"
	class:as-bg-green-500={notification.type === 'success'}
	class:as-bg-red-500={notification.type === 'error'}
	class:as-bg-blue-500={notification.type === 'info'}
	class:as-bg-yellow-500={notification.type === 'warning'}
	on:click={onDelete}
>
	<div class="as-w-6 as-h-6 as-mr-2 as-text-white">
		{#if notification.type === 'error'}
			<XCircle />
		{:else if notification.type === 'success'}
			<CheckCircle2 />
		{:else if notification.type === 'info'}
			<Info />
		{:else if notification.type === 'warning'}
			<AlertTriangle />
		{/if}
	</div>
	<div class="as-text-white as-max-w-xs">{notification.message}</div>
</div>
