<script context="module">
  let buttonUniqueIdCounter = 0;
</script>

<script>
  import { onMount } from "svelte";
  const _uniqueId = `m-button-svelte-id-${buttonUniqueIdCounter++}`;
  onMount(() => {
    //new MDCRipple(document.querySelector(`#${ _uniqueId }`));
  });
</script>

<button id={_uniqueId} class={`waves-effect waves-light btn`}>
  <slot />
</button>
