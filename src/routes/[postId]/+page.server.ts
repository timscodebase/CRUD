import { error, type Actions, type PageServerLoad, fail } from '@sveltejs/kit'
import type { PostType } from '$lib/types'
import db from '$lib/server/prisma'

export const load: PageServerLoad = async ({ params }) => {
	console.log('Params', params)
	const post: PostType | null = await db.post.findUnique({
		where: {
			id: Number(params.postId)
		}
	})

	console.log('Post', post)

	if (!post) {
		throw error(404, 'post not found')
	}

	return post
}

export const actions: Actions = {
	updatepost: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string
			content: string
		}

		try {
			await db.post.update({
				where: {
					id: Number(params.postId)
				},
				data: {
					title,
					content
				}
			})
		} catch (error) {
			console.error(error)
			return fail(500, { message: 'Failed to update post' })
		}

		return {
			status: 200
		}
	}
}
