<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status: status,
        error: error
      }
    };
  }
</script>

<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>m₂ | {status}</title>
</svelte:head>

<h1>{status}</h1>
<h2>{error.message}</h2>