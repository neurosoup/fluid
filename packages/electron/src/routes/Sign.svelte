<script>
  import LoginForm from "../components/LoginForm.svelte";
  import SignupForm from "../components/SignupForm.svelte";
  export let mode = "login";
</script>

<style>
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

{#if mode === 'login'}
  <LoginForm />
{:else}
  <SignupForm />
{/if}
