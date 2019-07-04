<script>
  import ApolloClient from "apollo-client";
  import { client } from "./apollo";
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-routing";

  import Login from "./routes/Login.svelte";
  import Signup from "./routes/Signup.svelte";

  export let url = "login";

  setClient(client);
</script>

<Router {url}>
  <div>
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
  </div>
</Router>
