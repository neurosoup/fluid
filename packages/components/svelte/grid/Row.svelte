<script>
  export let center;
  export let classes = "";
</script>

<div class={`row ${classes}`} class:center>
  <slot />
</div>
