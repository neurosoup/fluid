<script>
  export let sm;
  export let md;
  export let lg;
  export let xl;
  export let align;

  let classes = ["col"];

  $: if (sm) classes = [...classes, `s${sm}`];
</script>

<style>
  .align-middle {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
  .align-right {
    float: right;
  }
</style>

<div
  class={classes.join(' ')}
  class:align-middle={align && align === 'middle'}
  class:align-right={align && align === 'right'}>
  <slot />
</div>
