<script lang='ts'>
  export let href: string = ''
  export let role: string = 'button'
  export let classes: string = 'outline contrast'
  export let style: string = ''

  function handleClick(event: MouseEvent) {
    if (href === '') {
      event.preventDefault()
    }
    // redirect to href
    window.location.href = href
  }
</script>

<button on:click={handleClick} {role} class={classes} {style}>
  <slot />
</button>

<style>
  
</style>