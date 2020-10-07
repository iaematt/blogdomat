import React from 'react'

import { Container, Article, Image } from './styles'

interface Props {
  title: string
  thumbnailUrl: string
  content: string
}

export const PostLayout: React.FC<Props> = ({
  title,
  thumbnailUrl,
  content
}) => {
  return (
    <Container>
      <Article>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Article>

      <Image>
        <img src={thumbnailUrl} alt={title} />
      </Image>
    </Container>
  )
}
