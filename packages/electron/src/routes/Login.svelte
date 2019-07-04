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
  import { link } from "svelte-routing";

  import {
    Button,
    Modal,
    Container,
    Row,
    Column,
    InputField
  } from "@fluid/components";

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

  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 254, 234, 1) 0%,
      rgba(255, 254, 234, 1) 35%,
      #b7e8eb 100%
    );
    /* background: radial-gradient(
      ellipse at center,
      #4c4c4c 0%,
      #4c4c4c 35%,
      #2f2f2f 100%
    ); */
  }

  .ocean {
    height: 0%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .wave {
    background: url(../assets/wave.svg) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    -webkit-animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -175px;
    -webkit-animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @-webkit-keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @-webkit-keyframes swell {
    0%,
    100% {
      -webkit-transform: translate3d(0, -25px, 0);
      transform: translate3d(0, -25px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
  }
  @keyframes swell {
    0%,
    100% {
      -webkit-transform: translate3d(0, -25px, 0);
      transform: translate3d(0, -25px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
  }
</style>

<div class="bg" />

<div class="ocean">
  <div class="wave" />
  <div class="wave" />
</div>
<Modal open on:submit={submit} dismissible={false} opacity={0.2} maxWidth={400}>
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
            <a href="signup" use:link>Inscription</a>
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
