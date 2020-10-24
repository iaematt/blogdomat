import matter from 'gray-matter'
import marked from 'marked'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.BLOG_URL

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getAllPosts() {
  const context = require.context('../../_posts', false, /\.md$/)
  const posts = []

  const files = context.keys()
  const reverceFiles = files.reverse()

  for (const key of reverceFiles) {
    const post = key.slice(2)
    const content = await import(`../../_posts/${post}`)
    const meta = matter(content.default)

    const thumbnailUrl = `${baseUrl}/api/thumbnail.png?title=${meta.data.title}&icon=${meta.data.icon}`

    posts.push({
      slug: post.replace('.md', ''),
      title: meta.data.title,
      thumbnailUrl
    })
  }

  return posts
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getPostBySlug(slug: any) {
  const fileContent = await import(`../../_posts/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked(meta.content)

  const thumbnailUrl = `${baseUrl}/api/thumbnail.png?title=${meta.data.title}&icon=${meta.data.icon}`

  return {
    title: meta.data.title,
    description: meta.data.description,
    thumbnailUrl,
    slug,
    content
  }
}
