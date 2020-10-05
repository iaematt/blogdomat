import React from 'react'
import Head from 'next/head'

import { Footer, Header, Menu } from '../../components'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sobre Mim | Blog do Mat</title>
      </Head>

      <Header />
      <Menu />

      <Footer />
    </>
  )
}

export default About
