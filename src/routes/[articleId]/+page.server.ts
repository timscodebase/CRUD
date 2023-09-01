import { error, type Actions, type ServerLoad, fail } from "@sveltejs/kit";
import db from "$lib/server/prisma";

export const load: ServerLoad = async ({ params }) => {
  const getpost = async () => {
    const post = await db.post.findUnique({
      where: {
        id: Number(params.postId),
      },
    });
    if (!post) {
      throw error(404, "post not found");
    }

    return post;
  }

  return {
    post: await getpost(),
  }
};

export const actions: Actions = {
		updatepost: async ({ request, params }) => {
			const { title, content } = Object.fromEntries(
				await request.formData(),
			) as { title: string; content: string };

			try {
				await db.post.update({
					where: {
						id: Number(params.postId),
					},
					data: {
						title,
						content,
					},
				});
			} catch (error) {
				console.error(error);
				return fail(500, { message: "Failed to update post" });
			}

			return {
				status: 200,
			};
		},
	}