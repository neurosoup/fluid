<script>
  export let ripple = false;
  export let disabled = false;
  export let flat = false;
  export let floating = false;
  export let icon = "";
  export let classList = "";
</script>

<button
  class={`${classList}`}
  class:btn={!flat}
  class:btn-flat={!!flat}
  class:btn-floating={!!floating}
  class:waves-effect={ripple}
  class:disabled
  on:click>
  {#if icon !== ''}
    <i class="material-icons">{icon}</i>
  {/if}
  <slot />
</button>
