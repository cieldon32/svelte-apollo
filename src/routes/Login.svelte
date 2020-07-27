<script>
  import { navigate } from "svelte-routing";
  import { restore, mutate } from 'svelte-apollo';
  import { client } from '../apollo';
  import gql from 'graphql-tag';

  const LOGIN = gql`
    mutation($name: String!, $role: String!, $password: String!) {
      login(loginInput: {name: $name, role: $role, password: $password}){
        token
      }
    }
  `;

  let name = '';
  let role = '';
  let password = '';
  
  async function onLogin(e) {
    console.log('onLogin')
    try {
      await mutate(client, {
        mutation: LOGIN,
        variables: { name, role, password}
      });
      
      // navigate("/", { replace: true });
    } catch(error) {
      console.error(error);
    }
  }
</script>

<form on:submit|preventDefault={onLogin}>
  <label for="name">Name: <input type="text" bind:value={name} /></label>
  <label for="role">Role: <input type="text" bind:value={role} /></label>
  <label for="password">Password: <input type="text" bind:value={password} /></label>
  <button type="submit">Login</button>
</form>