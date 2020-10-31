import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import { Container, Menu } from './styles'
import { Logo } from '@components/ui'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Menu>
        <Link href="/contact">
          <a title="Contato">Contato</a>
        </Link>
        <a
          href="https://instagram.com/iaematt_"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/iaematt/blogdomat"
          target="_blank"
          rel="noreferrer"
          title="Código da aplicação no GitHub"
        >
          <FaGithub size={24} />
        </a>
      </Menu>
    </Container>
  )
}
