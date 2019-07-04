<script>
  import { Button, Container, Row } from "../../index";
  export let label = "";
</script>

<Container>
  <Row />
  <Row>
    <Button {...$$props} on:click>{label}</Button>
  </Row>
</Container>
