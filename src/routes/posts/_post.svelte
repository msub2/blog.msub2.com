<script>
  export let title;
  export let date;
  export let categories;
  // svelte-ignore unused-export-let
  export let description; // Unused here, only used in post listings
</script>

<svelte:head>
  <title>m₂ | {title}</title>
</svelte:head>

<h1>{title}</h1>
<h2>Published: {date}</h2>

<div class='blog-post-content'>
  <slot />
</div>

{#if categories.length}
  <aside>
    Categories:
    {#each categories as category}
      <a class='category' href="/posts/categories/{category}">{category}</a>
    {/each}
  </aside>
{/if}

<style>
  /* Desktops and laptops ----------- */
  @media only screen 
  and (min-width : 1224px) {
    .blog-post-content {
      text-align: left;
      margin-left: 25%;
      margin-right: 25%;
      flex-grow: 1;
    }
  }

  aside {
    flex-shrink: 0;
  }

  .category {
    color: white;
    margin: 0 0 1em 1em;
    text-decoration: none;
  }

  .category:hover {
    text-decoration: underline;
  }
</style>