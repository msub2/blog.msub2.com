<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>m₂ | {data.category}</title>
</svelte:head>

<h1>Posts under "{data.category}"</h1>
<PostList posts={data.posts} />