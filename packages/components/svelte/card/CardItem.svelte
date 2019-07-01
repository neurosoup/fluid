<script>
  //Can be image, title, content, stacked, action, reveal
  export let type = "content";
  export let activator;
</script>

<div class={`card-${type}`} class:activator>
  <slot />
</div>
