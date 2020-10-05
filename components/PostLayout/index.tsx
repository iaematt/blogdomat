import React from 'react'

import { Container } from './styles'

interface Props {
  title: string
  description: string
  thumbnailUrl: string
  content: string
}

export const PostLayout: React.FC<Props> = ({
  title,
  description,
  thumbnailUrl,
  content
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <img src={thumbnailUrl} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
