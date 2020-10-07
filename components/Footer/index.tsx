import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        2020 © <Link href="/">blogdomat</Link>.
      </p>

      <p></p>
    </Container>
  )
}
