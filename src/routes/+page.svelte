<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<div class="grid">
	<div>
		<h2>Posts</h2>
		{#each posts as post}
			<post>
				<header>{post.title}</header>
				<p>{post.content}</p>
				<div class="button-box">
					<form action="?/deletepost&id={post.id}" method="post">
						<button type="submit" class="outline secondart">Delete Post</button>
					</form>
					<form action="?/editpost&id={post.id}" method="post">
						<button type="submit" class="outline contrast">
							Edit Post
						</button>
					</form>
				</div>
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

<style>
	.button-box {
		display: flex;
		justify-content: space-between;
		padding-bottom: 1rem;
	}
</style>