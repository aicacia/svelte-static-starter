import type { LayoutLoad } from './$types';
import { getCurrentUser } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		return {
			user: currentUser
		};
	} else {
		throw redirect(302, '/signin');
	}
};
