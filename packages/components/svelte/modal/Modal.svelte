<script>
  import { createEventDispatcher } from "svelte";

  export let open = false;
  export let opacity = 0.2;
  export let dismissible = true;
  export let startingTop = "4%";
  export let endingTop = "10%";
  export let maxWidth;
  export let shadow =
    "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)";

  const dispatch = createEventDispatcher();

  const submit = e => {
    const form = e.srcElement;
    const values = [...form.elements]
      .filter(x => x.name.length)
      .map(x => {
        switch (x.nodeName) {
          case "INPUT":
            switch (x.type) {
              case "text":
              case "email":
              case "hidden":
              case "password":
              case "button":
              case "reset":
              case "submit":
                return x.value;
              case "checkbox":
              case "radio":
                return x.checked && x.value;
              case "file":
                break;
            }
            break;
          case "TEXTAREA":
            return x.value;
          case "SELECT":
            switch (x.type) {
              case "select-one":
                return x.value;
              case "select-multiple":
                for (j = x.options.length - 1; j >= 0; j = j - 1) {
                  if (x.options[j].selected) {
                    return x.value;
                  }
                }
                break;
            }
            break;
          case "BUTTON":
            switch (x.type) {
              case "reset":
              case "submit":
              case "button":
                return x.value;
            }
            break;
        }
      });
    dispatch("submit", values);
  };

  let instance;

  $: if (instance) {
    if (open) {
      instance.open();
    } else {
      instance.close();
    }
  }

  const mounted = node => {
    const options = {
      opacity,
      dismissible,
      startingTop,
      endingTop,
      preventScrolling: true
    };

    instance = M.Modal.init(node, options);
    if (open) {
      instance.open();
    }

    return {
      destroy() {
        instance.close();
        instance.destroy();
      }
    };
  };
</script>

<div
  class="modal"
  style="max-width: {maxWidth || '55%'}px; box-shadow:{shadow};"
  use:mounted>
  <form on:submit|preventDefault={submit}>
    <div class="modal-content">
      <slot name="content" />
    </div>
    <div class="modal-footer">
      <slot name="footer" />
    </div>
  </form>
</div>
