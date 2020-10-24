import React from 'react'

import { Container, Article, Image } from './styles'
import { Share } from '../index'

interface Props {
  title: string
  description: string
  thumbnailUrl: string
  slug: string
  content: string
}

export const PostLayout: React.FC<Props> = ({
  title,
  description,
  thumbnailUrl,
  slug,
  content
}) => {
  return (
    <Container>
      <Article>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Article>

      <Image>
        <img src={thumbnailUrl} alt={title} />

        <Share title={title} description={description} slug={slug} />
      </Image>
    </Container>
  )
}
