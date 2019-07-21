<script>
  import { Icon } from "../icon";
  import { Preloader } from "../preloader";

  export let ripple = false;
  export let disabled = false;
  export let icon = "";
  export let classes = "";
  export let loading = false;

  const mounted = node => {
    const options = {
      direction: "top",
      hoverEnabled: true
    };

    const instance = M.FloatingActionButton.init(node, options);

    return {
      destroy() {
        instance.destroy();
      }
    };
  };
</script>

<style>
  .centered {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="fixed-action-btn" use:mounted>
  <button
    class={`btn-floating btn-large ${classes} `}
    class:waves-effect={ripple}
    class:disabled
    on:click>
    <div class="centered">
      {#if loading}
        <Preloader size="tiny" />
      {:else}
        <Icon name={icon} />
      {/if}
    </div>
  </button>
  <slot name="actions" />
</div>
