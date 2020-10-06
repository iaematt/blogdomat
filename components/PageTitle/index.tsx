import React from 'react'

import { Container } from './styles'

interface Props {
  title: string
  description: string
}

export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
