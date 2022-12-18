<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>m₂ | Blog</title>
  <meta name="description" content="The official blog for m₂, full of random musings and writings.">

  <!-- OpenGraph Meta Tags -->
  <meta property="og:url" content="https://blog.msub2.com/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="m₂ Blog">
  <meta property="og:description" content="The official blog for m₂, full of random musings and writings.">
</svelte:head>

<PostList posts={data.posts} />
