import React from 'react'
import Head from 'next/head'
import { getAllPosts } from './api/posts'

import { Footer, Header, PageTitle, PostList } from '../../components'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
    thumbnailUrl: string
  }>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>start | blogdom4t</title>

        <meta
          name="description"
          content="Blog desenvolvido usando Next.js, Typescript, React.js, styled-components e markdown... hospedado na famosa vercel."
        />

        <meta property="og:site_name" content="blogdomat" />

        <meta property="og:title" content="start page blogdomat" />
        <meta
          property="og:description"
          content="Blog desenvolvido usando Next.js, Typescript, React.js, styled-components e markdown... hospedado na famosa vercel."
        />

        <meta
          property="og:image"
          content="https://blogdomat.vercel.app/image.png"
        />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="blogdomat" />
        <meta
          name="twitter:description"
          content="Blog desenvolvido usando Next.js, Typescript, React.js, styled-components e markdown... hospedado na famosa vercel."
        />
        <meta
          name="twitter:image"
          content="https://blogdomat.vercel.app/image.png"
        />
      </Head>

      <Header />
      <PageTitle title="Simples e minimalista, como deve ser.">
        Blog desenvolvido usando Next.js, Typescript, React.js,
        styled-components e markdown... hospedado na famosa vercel.
      </PageTitle>

      <PostList posts={props.posts} />

      <Footer />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}
