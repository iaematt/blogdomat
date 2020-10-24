import React from 'react'
import Link from 'next/link'

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

        <span>
          <Link href="/">
            <a title="Voltar para página inicial">Voltar para o início</a>
          </Link>
        </span>
      </div>
    </Container>
  )
}
