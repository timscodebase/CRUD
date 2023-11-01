import { fail, redirect, type Actions, type ServerLoad } from '@sveltejs/kit'
import db from '$lib/server/prisma'
import { slugify } from '$lib'

export const load = (async () => {
	return {}
}) satisfies PageServerLoad

export const actions: Actions = {
	createpost: async (event) => {
		const { title, content } = Object.fromEntries(await event.request.formData()) as {
			title: string
			content: string
		}
		if (!title || !content) {
			return fail(400, { message: 'Missing title or content' })
		}
		const slug = slugify(title)

		try {
			await db.post.create({
				data: {
					content,
					slug,
					title
				}
			})
		} catch (error) {
			console.error(error)
			return fail(500, { message: 'Could not create the post' })
		}

		throw redirect(303, `/`)
	}
}
