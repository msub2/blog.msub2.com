
export const load = async ({ fetch }) => {
  const posts = await fetch('/api/posts.json');
  const allPosts = await posts.json();

  return {
  posts: allPosts
}
}
