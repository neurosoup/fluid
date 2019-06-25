<script>
  export let ripple = false;
  export let disabled = false;
  export let flat = false;
  export let classList = "";
</script>

<button
  class={`${classList}`}
  class:btn={!flat}
  class:btn-flat={!!flat}
  class:waves-effect={ripple}
  class:disabled
  on:click>
  <slot />
</button>
