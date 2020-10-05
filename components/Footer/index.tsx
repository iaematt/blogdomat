import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Copyright © 2020 <Link href="/">Blog do Mat</Link>, todos os direitos
        reservados.
      </p>
    </Container>
  )
}
