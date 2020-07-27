<script>
	import ApolloClient from 'apollo-client';
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
	import { client } from './apollo';
	import { setClient } from 'svelte-apollo';

	export let url = "";
	setClient(client);
</script>

<style>
	h1 {
		color: purple;
	}
</style>


<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <Link to="register">Register</Link>
  </nav>
  <div>
    <Route path="register" component="{Register}" />
    <Route path="login" component="{Login}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>