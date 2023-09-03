import { fail, type Actions, type ServerLoad } from "@sveltejs/kit";
import db from "$lib/server/prisma";

export const load: ServerLoad = async () => {
  return {
    posts: await db.post.findMany(),
  }
};

export const actions: Actions = {
  createpost: async (event) => {
    const { title, content } = Object.fromEntries(await event.request.formData()) as { title: string; content: string };
    try {
      await db.post.create({
        data: {
          title,
          content,
        },
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not create the post" });
    }
    return {
      status: 201,
    }
  },
  deletepost: async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
      return fail(400, { message: "Missing id" });
    }
    try {
      await db.post.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not delete the post" });
    }

    return {
      status: 200,
    }
  },
  editpost: async ({ url }) => {
    const id = url.searchParams.get("id");
    // redirect to the edit page
    return {
      status: 303,
      headers: {
        Location: id,
      },
    }
  },
};