<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ article } = data);
</script>

<form action="?/updateArticle" method="post">
	<h3>Editing: {article.title}</h3>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" value={article.title} />
	<label for="content">Content</label>
	<textarea name="content" id="content" cols="30" rows="10" value={article.content} />
	<button type="submit">Add Update</button>
</form>
