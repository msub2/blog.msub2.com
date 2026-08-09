<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>m₂ | {page.status}</title>
</svelte:head>

<h1>{page.status}</h1>
<h2>{page.error?.message}</h2>