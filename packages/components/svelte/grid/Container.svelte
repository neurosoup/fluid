<script>
  export let dimmer;
</script>

<style>
  .dimmer {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

{#if !!dimmer}
  <div class="dimmer" style="background-color: {`rgba(0, 0, 0, ${dimmer})`};" />
{/if}
<div class="container">
  <slot />
</div>
