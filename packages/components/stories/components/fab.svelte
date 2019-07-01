<script>
  import { FloatingActionButton, Button, Container, Row } from "../../index";
</script>

<Container dimmer={0.2}>
  <Row />
  <Row>
    <FloatingActionButton {...$$props} on:click>
      <ul slot="actions">
        <li>
          <Button floating icon="insert_chart" />
        </li>
        <li>
          <Button floating icon="format_quote" />
        </li>
        <li>
          <Button floating icon="publish" />
        </li>
        <li>
          <Button floating icon="attach_file" />
        </li>
      </ul>
    </FloatingActionButton>
  </Row>
</Container>
