<script context="module">
  import gql from 'graphql-tag';
  import { client } from '../apollo';
  
  const ADD_PATIENT = gql`
    mutation($appointmentTime: String!) {
      addPatient(patientInput: {appointmentTime: $appointmentTime}){
        id
      }
    }
  `;
  
</script>
<script>
  import { restore, mutate, query } from 'svelte-apollo';
  let appointmentTime = '';
  
  async function addPatient(e) {
    try {
      const res = await mutate(client, {
        mutation: ADD_PATIENT,
        variables: { appointmentTime }
      });
      console.log(res)
    } catch(error) {
      console.error(error);
    }
  }
</script>

<main>
  <form on:submit|preventDefault={addPatient}>
    <label for="appointmentTime">Appointment Time</label>
    <input type="text" bind:value={appointmentTime} />
    <button type="submit">Add Patient</button>
  </form>
  
</main>


<style>
main {
  width: 100%;
}
</style>