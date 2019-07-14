<script context="module">
  import gql from "graphql-tag";
  import { client } from "../apollo";
  const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          name
        }
      }
    }
  `;
</script>

<script>
  import { mutate } from "svelte-apollo";
  import { Link } from "svelte-routing";

  import FadeTransition from "./FadeTransition.svelte";

  import {
    Button,
    Modal,
    Container,
    Row,
    Column,
    InputField
  } from "@fluid/components";

  export let open = true;
  let errorMessage = "";

  const submit = async e => {
    try {
      const mutation = await mutate(client, {
        mutation: LOGIN,
        variables: { email: e.detail[0], password: e.detail[1] }
      });
    } catch (error) {
      errorMessage = error.graphQLErrors[0].message;
    }
  };
</script>

<style>
  h6,
  p {
    color: #757575;
  }

  p.error {
    color: #f44336;
  }
</style>

<Modal {open} on:submit={submit} dismissible={false} maxWidth={400}>
  <div slot="content">
    <Row center>
      <h4>Bienvenue !</h4>
      <h6>Content de vous revoir ;)</h6>
    </Row>
    <Row />
    <Row>
      <Column align="middle" lg={12}>
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
            <Link to="signup">Inscription</Link>
          </p>
        </Row>
        <Row>
          <p class="error">{errorMessage}</p>
        </Row>
      </Column>
    </Row>
  </div>
  <div slot="footer">
    <Button type="submit">Se connecter</Button>
  </div>
</Modal>
