<script>
  export let size = ""; //tiny, small, medium, big
  export let color = "blue"; //red, blue, yellow, green
  export let type = "circle"; //indeterminate, circle
</script>

<style>
  .preloader-wrapper.tiny {
    width: 24px;
    height: 24px;
  }
</style>

{#if type === 'indeterminate'}
  <div class="progress">
    <div class="indeterminate" />
  </div>
{/if}
{#if type === 'circle'}
  <div class={`preloader-wrapper ${size} active`}>
    <div class={`spinner-layer spinner-${color}-only`}>
      <div class={`${type}-clipper left`}>
        <div class={`${type}`} />
      </div>
      <div class="gap-patch">
        <div class={`${type}`} />
      </div>
      <div class={`${type}--clipper right`}>
        <div class={`${type}`} />
      </div>
    </div>
  </div>
{/if}
