<script>
  import { fade } from "svelte/transition";
</script>

<div transition:fade={{ delay: 0, duration: 200 }}>
  <slot />
</div>
