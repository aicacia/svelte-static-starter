import { browser } from '$app/environment';
import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';

const localeWritable = localstorageWritable('locale', browser ? navigator.language : 'en-US');

export const locale = derived(localeWritable, (state) => state);

export function setLocale(locale: string) {
	localeWritable.set(locale);
}

export function getLocale() {
	return get(localeWritable);
}

export function useBrowserLocale() {
	localeWritable.set(navigator.language);
}

if (browser) {
	window.addEventListener('languagechange', () => {
		setLocale(navigator.language);
	});
}
