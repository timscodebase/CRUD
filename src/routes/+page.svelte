<script lang="ts">
	import { PostList } from '$lib'

	export let data
	$: ({ posts } = data)
</script>

<div class="grid">
	<div>
		<PostList {posts} />
	</div>
</div>
