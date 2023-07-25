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
	class="flex items-center py-2 px-3 m-1 cursor-pointer shadow"
	class:bg-green-500={notification.type === 'success'}
	class:bg-red-500={notification.type === 'error'}
	class:bg-blue-500={notification.type === 'info'}
	class:bg-yellow-500={notification.type === 'warning'}
	on:click={onDelete}
>
	<div class="w-6 h-6 mr-2 text-white">
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
	<div class="text-white max-w-xs">{notification.message}</div>
</div>
