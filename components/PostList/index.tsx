import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface Props {
  posts: {
    slug: string
    title: string
    thumbnailUrl: string
  }[]
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, idx) => (
        <article key={idx}>
          <Link href={post.slug}>
            <img src={post.thumbnailUrl} alt={post.title} />
          </Link>
        </article>
      ))}
    </Container>
  )
}
