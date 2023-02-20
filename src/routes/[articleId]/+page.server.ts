import { error, type Actions, type ServerLoad, fail } from "@sveltejs/kit";
import db from "$lib/server/prisma";

export const load: ServerLoad = async ({ params }) => {
  const getArticle = async () => {
    const article = await db.article.findUnique({
      where: {
        id: Number(params.articleId),
      },
    });
    if (!article) {
      throw error(404, "Article not found");
    }

    return article;
  }

  return {
    article: await getArticle(),
  }
};

export const actions: Actions = {
		updateArticle: async ({ request, params }) => {
			const { title, content } = Object.fromEntries(
				await request.formData(),
			) as { title: string; content: string };

			try {
				await db.article.update({
					where: {
						id: Number(params.articleId),
					},
					data: {
						title,
						content,
					},
				});
			} catch (error) {
				console.error(error);
				return fail(500, { message: "Failed to update article" });
			}

			return {
				status: 200,
			};
		},
	}