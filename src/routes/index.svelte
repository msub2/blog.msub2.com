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
</svelte:head>

<PostList posts={posts} />
