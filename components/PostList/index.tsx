import React from 'react'
import Link from 'next/link'

import { Container, Image } from './styles'

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
            <a>
              <Image src={post.thumbnailUrl} alt={post.title} />
            </a>
          </Link>
        </article>
      ))}
    </Container>
  )
}
