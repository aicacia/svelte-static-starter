import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';

export interface User {
	id: number;
	username: string;
}

const tokenWritable = localstorageWritable<string | null>('token', null);
const userWritable = localstorageWritable<User | null>('user', null);
export const user = derived(userWritable, (user) => user);

export async function signIn(username: string, password: string) {
	// TODO: get user and token from server
	if (!username || !password) {
		throw new Error('Username and password are required');
	}
	const user = {
		id: 1,
		username
	};
	userWritable.set(user);
	tokenWritable.set(username);
	return user;
}

export async function signOut() {
	userWritable.set(null);
	tokenWritable.set(null);
}

let initialCall = true;
export async function getCurrentUser() {
	let user = get(userWritable);
	if (initialCall) {
		initialCall = false;
		if (isOnline()) {
			const token = get(tokenWritable);
			if (token) {
				// TODO: get user and token from server
				user = {
					id: 1,
					username: token
				};
			} else {
				user = null;
			}
		}
	}
	return user;
}
