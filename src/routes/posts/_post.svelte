<script>
  export let title;
  export let date;
  export let categories;
</script>

<h1>{title}</h1>
<h2>Published: {date}</h2>

<div class='blog-post-content'>
  <slot />
</div>

{#if categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each categories as category}
        <li>
          <a href="/posts/categories/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
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
    }
  }
</style>