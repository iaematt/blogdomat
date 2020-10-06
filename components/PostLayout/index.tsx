import React from 'react'

import { Container } from './styles'

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
      <img src={thumbnailUrl} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
