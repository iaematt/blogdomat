import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import { Container, Menu } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        <Link href="/">blogdom4t</Link>
      </h1>

      <Menu>
        <Link href="/contact">Contato</Link>
        <a href="#">
          <FaInstagram size={24} />
        </a>
        <a href="#">
          <FaGithub size={24} />
        </a>
      </Menu>
    </Container>
  )
}
