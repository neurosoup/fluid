<script>
  import { onMount } from "svelte";
  import {
    InputField,
    Card,
    CardItem,
    Container,
    Row,
    Button
  } from "../../index";

  onMount(() => {
    // Reinitialize all the Materialize labels on the page coz we are dynamically adding inputs through storybook
    M.updateTextFields();
  });
</script>

<Container>
  <Row />
  <Row>
    <form on:submit|preventDefault>
      <InputField {...$$props} />
      <Button type="submit" ripple>Submit</Button>
    </form>
  </Row>
</Container>
