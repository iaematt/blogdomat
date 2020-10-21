import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'

import { Container, Menu } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        <Link href="/">{process.env.BLOG_NAME}</Link>
      </h1>

      <Menu>
        <Link href="/contact">Contato</Link>
        <a
          href="https://instagram.com/iaematt_"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/iaematt/blogdomat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </Menu>
    </Container>
  )
}
