const siteURL = 'https://blog.msub2.com';
const siteTitle = 'm₂ Blog';
const siteDescription = 'The official blog for m₂, full of random musings and writings.';
  
export const get = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('./posts/*.md')).map(async ([path, resolver]) => {
      const post = await resolver();
      const metadata = post.metadata;
      const slug = path.slice(2, -3);
      const content = post.default.render().html;
      return { ...metadata, slug, content }
    })
  )
  .then(posts => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const body = render(posts)
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };

  return {
    body,
    headers,
  }
}

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map(post => `
<item>
<guid isPermaLink="true">${siteURL}/${post.slug}</guid>
<title>${post.title}</title>
<link>${siteURL}/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
<content:encoded>${post.content}</content:encoded>
</item>
`).join('')}
</channel>
</rss>
`