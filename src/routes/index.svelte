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
  export let posts;
</script>

{#each posts as post}
  <div class='post'>
    <a class='postTitle' href={post.path}>
      {post.meta.title}
    </a>
    <p>{post.meta.description}</p>
    <p>Published {post.meta.date}</p>
  </div>
{/each}

<style>
  .post {
    border: 4px solid white;
    border-radius: 8px;
    padding: 16px;
    margin: 1% 0%;
  }

  @media (min-width: 800px) {
    .post {
      margin: 1% 25%;
    }
  }

  .postTitle {
    font-size: 36px;
    color: white;
    text-decoration: none;
  }

  .postTitle:hover {
    text-decoration: underline;
  }
</style>