<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json');
    const allPosts = await posts.json();
  
    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';
  export let posts;
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

<PostList posts={posts} />
