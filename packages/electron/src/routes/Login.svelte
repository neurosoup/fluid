<script>
  import { Container, Row, Column, InputField } from "@fluid/components";
</script>

<Container>
  <Row />
  <Row>
    <Column align="middle" sm={6} md={3}>
      <form>
        <Row>
          <InputField
            type="email"
            name="email"
            label="Email"
            required
            placeholder="HAHAHAH"
            errorText="Cet email n'est pas valide" />
        </Row>

      </form>
    </Column>
  </Row>
</Container>
