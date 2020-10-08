import React from 'react'

import { Container, Error, Message } from './styles'

interface Props {
  error: number
}

export const StatusLayout: React.FC<Props> = ({ error, children }) => {
  return (
    <Container>
      <div>
        <Error>{error}</Error>
        <Message>{children}</Message>
      </div>
    </Container>
  )
}
