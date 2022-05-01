<script>
  export let title
  export let date
</script>

<h1>{title}</h1>
<h2>Published: {date}</h2>

<div class='blog-post-content'>
  <slot />
</div>

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