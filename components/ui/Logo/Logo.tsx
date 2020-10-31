import React, { FC } from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Logo: FC = () => {
  return (
    <Link href="/">
      <a title={process.env.BLOG_NAME}>
        <Container src="assets/img/logo.png" />
      </a>
    </Link>
  )
}

export default Logo
