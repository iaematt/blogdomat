import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        2020 ©{' '}
        <Link href="/">
          <a title={process.env.BLOG_NAME}>{process.env.BLOG_NAME}</a>
        </Link>
        . Todos os direitos reservados.
      </p>
    </Container>
  )
}
