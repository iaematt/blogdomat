import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Menu: React.FC = () => {
  return (
    <Container>
      <Link href="/">Start</Link>
      <Link href="/contact">Contato</Link>
      <Link href="/about">Sobre Mim</Link>
    </Container>
  )
}
