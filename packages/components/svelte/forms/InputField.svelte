<script>
  export let name;
  export let label;
  export let type = "text";
  export let placeholder;
  export let validate = true;
  export let required;
  export let disabled;
  export let helperText;
  export let errorText;
  export let successText;
</script>

<div class="input-field">
  <input
    id={name}
    {type}
    {placeholder}
    {disabled}
    class:validate
    class:required />
  <label for={name}>{label}</label>
  {#if errorText || successText || helperText}
    <span
      class="helper-text"
      data-error={errorText || ''}
      data-success={successText || ''}>
      {#if helperText}{helperText}{/if}
    </span>
  {/if}
</div>
