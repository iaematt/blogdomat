import React from 'react'

import { Container } from './styles'

interface Props {
  title: string
}

export const PageTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{children}</p>
    </Container>
  )
}
