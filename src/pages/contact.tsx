import React from 'react'
import Head from 'next/head'

import { Footer, Header, Menu } from '../../components'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contato | Blog do Mat</title>
      </Head>

      <Header />
      <Menu />

      <Footer />
    </>
  )
}

export default Contact
