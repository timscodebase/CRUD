import { fail, type Actions, type ServerLoad } from "@sveltejs/kit";
import db from "$lib/server/prisma";

export const load: ServerLoad = async () => {
  return {
    articles: await db.article.findMany(),
  }
};

export const actions: Actions = {
  createArticle: async (event) => {
    const { title, content } = Object.fromEntries(await event.request.formData()) as { title: string; content: string };
    try {
      await db.article.create({
        data: {
          title,
          content,
        },
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not create the article" });
    }
    return {
      status: 201,
    }
  },
  deleteArticle: async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
      return fail(400, { message: "Missing id" });
    }
    try {
      await db.article.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not delete the article" });
    }

    return {
      status: 200,
    }
  }
};