<script lang="ts">
	import type { PostType } from '$lib'
	export let post: PostType
</script>

<post>
	<header>{post.title}</header>
	{@html post.content}
	<div class="button-box">
		<form action="?/deletepost&id={post.id}" method="post">
			<button type="submit" class="outline secondart">Delete Post</button>
		</form>
		<form action="?/editpost&id={post.id}" method="post">
			<button type="submit" class="outline contrast"> Edit Post </button>
		</form>
	</div>
</post>

<style>
</style>
