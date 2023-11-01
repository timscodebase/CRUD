<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		tinymce.init({
			selector: 'textarea#content',
			plugins:
				'save mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
			toolbar:
				'save | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
			save_enablewhendirty: false,
			save_oncancelcallback: () => {
				console.log('Save canceled')
			},
			save_onsavecallback: () => {
				console.log('Save canceled')
			}
		})
	})
</script>

<form action="?/createpost" method="post">
	<h3>New post</h3>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" />
	<label for="content">Content</label>
	<textarea name="content" id="content" cols="30" rows="10" />
	<button type="submit">Add post</button>
</form>
