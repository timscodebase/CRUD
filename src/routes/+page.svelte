<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<div class="grid">
	<div>
		<h2>posts:</h2>
		{#each posts as post}
			<post>
				<header>{post.title}</header>
				<p>{post.content}</p>
				<form action="?/deletepost&id={post.id}" method="post">
					<button type="submit" class="outline secondart">Delete post</button>
				</form>
				<a href="/{post.id}" role="button" class="outline contrast" style="width: 100%">
					Edit post
				</a>
			</post>
		{/each}
	</div>
	<form action="?/createpost" method="post">
		<h3>New post</h3>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" />
		<label for="content">Content</label>
		<textarea name="content" id="content" cols="30" rows="10" />
		<button type="submit">Add post</button>
	</form>
</div>
