import React from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import { getPostBySlug, getAllPosts } from './api/posts'
import { Footer, Header, PostLayout, PageTitle } from '../../components'

interface PostProps {
  title: string
  description: string
  thumbnailUrl: string
  content: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Post(props: PostProps) {
  return (
    <>
      <Head>
        <title>{props.title} | blogdomat</title>

        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="blogdomat" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.thumbnailUrl} />
      </Head>

      <Header />

      <PageTitle title={props.title}>{props.description}</PageTitle>

      <PostLayout
        title={props.title}
        thumbnailUrl={props.thumbnailUrl}
        content={props.content}
      />

      <Footer />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: await getPostBySlug(context.params.slug)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  let paths = await getAllPosts()

  paths = paths.map(post => {
    return {
      params: { slug: post.slug }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}
