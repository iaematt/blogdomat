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
        Olá!!1 Eu sou Matheus, dono desse blog bem simples, <br />
        com o intúito de ajudar com assuntos genéricos.
        <br />
        <br />
        Para me contatar utilize o e-mail: <br />
        <a href="mailto:matheusbastos@outlook.com">
          matheusbastos@outlook.com
        </a>{' '}
        <br />
        ou me chame no instagram: <br />
        <a
          href="https://instagram.com/iaematt_"
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
