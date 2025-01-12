<script>
  import Giscus from '@giscus/svelte';
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
</svelte:head>

<h1>{title}</h1>
<h2>Published: {date}</h2>

<div class='blog-post-content'>
  <slot />
  <Giscus
    repo="msub2/blog.msub2.com"
    repoId="R_kgDOHRC5fw"
    category="Announcements"
    categoryId="DIC_kwDOHRC5f84CVA_4"
    mapping="pathname"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="dark_high_contrast"
    lang="en"
    crossorigin="anonymous"
    loading="lazy" />
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