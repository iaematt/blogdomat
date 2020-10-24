import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import { Container, Menu } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        <Link href="/">
          <a title={process.env.BLOG_NAME}>{process.env.BLOG_NAME}</a>
        </Link>
      </h1>

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
