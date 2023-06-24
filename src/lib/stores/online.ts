import { browser } from '$app/environment';
import { derived, get, writable } from 'svelte/store';

const onlineWritable = writable(typeof navigator === 'object' ? navigator.onLine : false);
export const online = derived(onlineWritable, (online) => online);

export function isOnline() {
	return get(online);
}

function onOnline() {
	onlineWritable.set(true);
}

function onOffline() {
	onlineWritable.set(false);
}

if (browser) {
	window.addEventListener('online', onOnline);
	window.addEventListener('offline', onOffline);
}
