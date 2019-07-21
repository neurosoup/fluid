<script>
  export let name = "";
  export let size = "medium";

  const convertSize = size => {
    switch (size) {
      case "tiny":
        return "1rem";
      case "small":
        return "2rem";
      case "medium":
        return "4rem";
      case "large":
        return "6rem";
      default:
        return "4rem";
    }
  };
</script>

<i class={`${convertSize(size)} material-icons`}>{name}</i>
