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

  .ocean {
    height: 0%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(194, 24, 91, 0.71);
  }

  .wave {
    background: url(../assets/grey-wave.svg) repeat-x;
    position: absolute;
    top: -400px;
    width: 6400px;
    height: 400px;
    -webkit-animation: wave 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    animation: wave 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -390px;
    -webkit-animation: wave 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 120s ease -1.25s infinite;
    animation: wave 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 120s ease -1.25s infinite;
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
