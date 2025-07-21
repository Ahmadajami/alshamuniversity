import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const rawData = Object.fromEntries(formData);
		const realdata = { username: '023071552', password: 'dani0933534616' };
		if (JSON.stringify(rawData) === JSON.stringify(realdata)) {
			redirect(302, '/home');
		} else {
			console.log('form error');
			return fail(400, { message: 'خطأ في المعلومات المدخلة' });
		}
	}
};
