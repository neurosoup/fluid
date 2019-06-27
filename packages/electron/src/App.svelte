<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./routes/Login.svelte";
  import { Button } from "@fluid/components";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/" component={Login} />
  </div>
</Router>
