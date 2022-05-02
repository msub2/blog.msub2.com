export const get = async () => {
  const allPostFiles = import.meta.glob('../posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver();
      const metadata = post.metadata;
      const postPath = path.slice(2, -3);
      const content = post.default.render().html;

      return {
        meta: metadata,
        path: postPath,
        content: content
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return {
    body: sortedPosts
  }
}