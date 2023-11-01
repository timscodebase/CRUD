import { type Actions, fail, redirect, type ServerLoad } from '@sveltejs/kit'
import db from '$lib/server/prisma'

export const load: ServerLoad = async () => {
	return {
		posts: await db.post.findMany().then((posts) => posts.sort((a, b) => b.createdAt - a.createdAt))
	}
}

export const actions: Actions = {
	deletepost: async ({ url }) => {
		const id = url.searchParams.get('id')
		if (!id) {
			return fail(400, { message: 'Missing id' })
		}
		try {
			await db.post.delete({
				where: {
					id: parseInt(id)
				}
			})
		} catch (error) {
			console.error(error)
			return fail(500, { message: 'Could not delete the post' })
		}

		throw redirect(303, `/`)
	},
	editpost: async ({ url }) => {
		const id = url.searchParams.get('id')
		// redirect to the edit page
		return {
			status: 303,
			headers: {
				Location: id
			}
		}
	}
}
