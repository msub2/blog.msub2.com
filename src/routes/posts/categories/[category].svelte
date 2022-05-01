<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        category: params.category,
        posts: matchingPosts
      }
    }
  }
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';
  export let category;
  export let posts;
</script>

<h1>Posts under "{category}"</h1>
<PostList posts={posts} />