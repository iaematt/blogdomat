import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        <Link href="/">Blog do Mat</Link>
      </h1>
    </Container>
  )
}
