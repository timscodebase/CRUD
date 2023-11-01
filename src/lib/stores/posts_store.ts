import { writable } from 'svelte/store'
import type { PostsType } from '$lib'
function createPosts(posts: PostsType) {
	const { subscribe, set } = writable(posts)

	function add(posts: PostsType) {
		set(posts)
	}

	return { subscribe, add }
}

export const posts_store = createPosts([] as PostsType)
