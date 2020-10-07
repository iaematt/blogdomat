import React from 'react'
import Head from 'next/head'

import { Footer, Header, PageTitle } from '../../components'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contato | blogdomat</title>
      </Head>

      <Header />

      <PageTitle title="Entre em contato">
        Fale comigo pelo e-mail:{' '}
        <a href="mailto:matheusbastos@outlook.com">matheusbastos@outlook.com</a>{' '}
        <br />
        ou pelo instagram:{' '}
        <a
          href="https://github.com/iaematt/blogdomat"
          target="_blank"
          rel="noreferrer"
        >
          @iaematt_
        </a>
      </PageTitle>

      <Footer />
    </>
  )
}

export default Contact
