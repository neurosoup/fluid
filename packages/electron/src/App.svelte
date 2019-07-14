<script>
  import ApolloClient from "apollo-client";
  import { client } from "./apollo";
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-routing";

  import Sign from "./routes/Sign.svelte";

  export let url = "";

  setClient(client);
</script>

<Router {url}>
  <Route component={Sign} />
  <Route path="login" component={Sign} />
  <Route path="signup">
    <Sign mode="signup" />
  </Route>
</Router>
