<script context="module">
  import gql from "graphql-tag";
  import { client } from "../apollo";
  const LOGIN = gql`
    mutation signup($name: String, $email: String!, $password: String!) {
      signup(name: $name, email: $email, password: $password) {
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

  let errorMessage = "";
  let loading = false;

  const submit = async e => {
    try {
      loading = true;
      const mutation = await mutate(client, {
        mutation: LOGIN,
        variables: {
          name: e.detail[0],
          email: e.detail[1],
          password: e.detail[2]
        }
      });
    } catch (error) {
      errorMessage = error.graphQLErrors[0].message;
    } finally {
      loading = false;
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

<Modal
  open
  on:submit={submit}
  dismissible={false}
  maxWidth={400}
  opacity="0"
  shadow="none">
  <div slot="content">
    <Row center>
      <h4>Créer un compte</h4>
    </Row>
    <Row />
    <Row>
      <Column align="middle" lg={12}>
        <Row>
          <InputField type="text" name="fullname" label="Nom complet" />
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
            Vous êtes déjà inscrit ?
            <Link to="login">Connexion</Link>
          </p>
        </Row>
        <Row>
          <p class="error">{errorMessage}</p>
        </Row>
      </Column>
    </Row>
  </div>
  <div slot="footer">
    <Button type="submit" {loading}>S'inscrire</Button>
  </div>
</Modal>
