<script lang="ts">
	import type { PageData } from '../[postId]/$types'

	export let data: PageData

	$: ({ post } = data)
	console.log(data)
</script>

<form action="?/updatepost" method="post">
	<h3>Editing: {post.title}</h3>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" value={post.title} />
	<label for="content">Content</label>
	<textarea name="content" id="content" cols="30" rows="10" value={post.content} />
	<button type="submit">Add Update</button>
</form>
