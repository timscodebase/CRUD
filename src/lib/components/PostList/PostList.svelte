<script lang="ts">
	import type { PostsType } from '$lib'
	import { Post } from '$lib'

	export let posts: PostsType
</script>

<h2>Posts</h2>

{#each posts as post}
	<Post {post} />
{/each}

<style>
</style>
