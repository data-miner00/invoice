import { type Action, fail } from '@sveltejs/kit';

export const actions = {
	default: (async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		if (!username || !password) {
			return fail(400, {
				message: 'Missing username or passrod'
			});
		}
		cookies.set('username', username, { path: '/' });
		return { message: 'logged in' };
	}) satisfies Action
};
