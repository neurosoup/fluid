<script>
  export let ripple = false;
  export let disabled = false;
  export let icon = "";
  export let classList = "";

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

<div class="fixed-action-btn" use:mounted>
  <button
    class={`btn-floating btn-large ${classList} `}
    class:waves-effect={ripple}
    class:disabled
    on:click>
    <i class="material-icons">{icon}</i>
  </button>
  <slot name="actions" />
</div>
