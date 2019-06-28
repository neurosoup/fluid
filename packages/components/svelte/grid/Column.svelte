<script>
  export let sm;
  let s;

  $: s = sm ? `s${sm}` : undefined;
</script>

<div class={`col ${s}`}>
  <slot />
</div>
