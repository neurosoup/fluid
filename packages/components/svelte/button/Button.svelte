<script>
  import { Icon } from "../icon";
  import { Preloader } from "../preloader";

  export let ripple = false;
  export let disabled = false;
  export let flat = false;
  export let floating = false;
  export let icon = "";
  export let iconAlignment = "left";
  export let type;
  export let loading = false;
  export let classes = "";
  export let size = ""; //small, large
</script>

<style>
  .progress {
    background-color: transparent;
    border-radius: 0;
    margin: 0;
    bottom: 4px;
  }
  .preloader-wrapper {
    bottom: 32px;
  }
  .icon-left {
    margin-right: 8px;
    height: 100%;
  }
  .icon-right {
    margin-left: 8px;
    height: 100%;
  }
  .icon-center {
    margin: auto;
  }
  .button-content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .progress-container {
    width: calc(100% + 32px);
    position: relative;
    left: -16px;
    height: calc(100% - 32px);
    opacity: 0.25;
  }
  .preloading-container {
    width: calc(100% + 32px);
    position: relative;
    left: -16px;
    bottom: 32px;
    height: calc(100% - 32px);
    opacity: 0.25;
  }
</style>

<button
  {type}
  class={`${classes}`}
  class:btn={!flat}
  class:btn-flat={!!flat}
  class:btn-floating={!!floating}
  class:waves-effect={ripple}
  class:disabled={disabled || loading}
  on:click>

  <div class="button-content">
    {#if icon !== '' && iconAlignment === 'left'}
      <div class={!floating ? 'icon-left' : 'icon-center'}>
        <Icon {size} name={icon} />
      </div>
    {/if}
    <div>
      <slot />
    </div>
    {#if icon !== '' && iconAlignment === 'right'}
      <div class={!floating ? 'icon-right' : 'icon-center'}>
        <Icon {size} name={icon} />
      </div>
    {/if}
  </div>
  {#if loading}
    {#if floating}
      <div class="preloading-container">
        <Preloader size="tiny" />
      </div>
    {:else}
      <div class="progress-container">
        <div class="progress">
          <div class="indeterminate" />
        </div>
      </div>
    {/if}
  {/if}
</button>
