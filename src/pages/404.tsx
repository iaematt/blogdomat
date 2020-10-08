import React from 'react'
import Head from 'next/head'

import { StatusLayout } from '../../components'

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 página não encontrada | blogdomat</title>
      </Head>

      <StatusLayout error={404}>página não encontrada</StatusLayout>
    </>
  )
}

export default Custom404
