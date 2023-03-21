<script>
  export let slug;
  export let title;
  export let date;
  export let categories;
  export let description;
</script>

<svelte:head>
  <title>m₂ | {title}</title>
  <meta name="description" content={description}>

  <!-- OpenGraph Meta Tags -->
  <meta property="og:url" content="https://blog.msub2.com/posts/{slug}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="m₂ | {title}">
  <meta property="og:description" content={description}>

  <script src="https://giscus.app/client.js"
        data-repo="msub2/blog.msub2.com"
        data-repo-id="R_kgDOHRC5fw"
        data-category="Announcements"
        data-category-id="DIC_kwDOHRC5f84CVA_4"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark_high_contrast"
        data-lang="en"
        crossorigin="anonymous"
        async>
  </script>
</svelte:head>

<h1>{title}</h1>
<h2>Published: {date}</h2>

<div class='blog-post-content'>
  <slot />
  <div class="giscus"></div>
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