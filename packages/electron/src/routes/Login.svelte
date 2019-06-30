<script>
  import {
    Button,
    Modal,
    Container,
    Row,
    Column,
    InputField
  } from "@fluid/components";

  const submit = e => {
    console.log("------------->e", e);
  };
</script>

<style>
  h6,
  p {
    color: #757575;
  }
</style>

<Modal open on:submit={submit} dismissible={false} opacity={0.2}>
  <div slot="content">
    <Row center>
      <h4>Bienvenue !</h4>
      <h6>Contents de vous revoir ;)</h6>
    </Row>
    <Row />
    <Row>
      <Column align="middle" lg={6}>
        <Row>
          <InputField
            type="email"
            name="email"
            label="Email"
            required
            errorText="Cet email n'est pas valide" />
          <InputField
            type="password"
            name="password"
            label="Mot de passe"
            required />
        </Row>
        <Row>
          <p>
            Vous n'êtes pas encore inscrit ?
            <a href="index.html">Inscription</a>
          </p>
        </Row>
      </Column>
    </Row>
  </div>
  <div slot="footer">
    <Button type="submit">Se connecter</Button>
  </div>
</Modal>
