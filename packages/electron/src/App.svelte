<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./routes/Login.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/" component={Login} />
  </div>
</Router>
