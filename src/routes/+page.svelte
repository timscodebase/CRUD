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

<style>
	.button-box {
		display: flex;
		justify-content: space-between;
		padding-bottom: 1rem;
	}
</style>
