<script>
  import { Button, Container, Row } from "../../index";
  export let label = "";
</script>

<Container dimmer={0.2}>
  <Row />
  <Row>
    <Button {...$$props} on:click>{label}</Button>
  </Row>
</Container>
