import React from 'react'
import Head from 'next/head'
import { getAllPosts } from './api/posts'

import { Header, PageTitle, PostList } from '../../components'
import { Footer } from '@components/ui'

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
        <title>{process.env.BLOG_NAME}</title>

        <meta name="description" content={process.env.BLOG_DESCRIPTION} />
        <meta property="og:site_name" content={process.env.BLOG_NAME} />
        <meta property="og:title" content={process.env.BLOG_NAME} />
        <meta
          property="og:description"
          content={process.env.BLOG_DESCRIPTION}
        />
        <meta
          property="og:image"
          content={`${process.env.BLOG_URL}/assets/img/thumbnail.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.BLOG_NAME} />
        <meta
          name="twitter:description"
          content={process.env.BLOG_DESCRIPTION}
        />
        <meta
          name="twitter:image"
          content={`${process.env.BLOG_URL}/assets/img/thumbnail.png`}
        />
      </Head>

      <Header />
      <PageTitle title={process.env.BLOG_TITLE}>
        {process.env.BLOG_DESCRIPTION}
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
