import Link from 'next/link'
import Head from 'next/head'
import { getAllPosts } from './api/posts'

import { Footer, Header, Menu, PostList } from '../../components'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
    thumbnailUrl: string
  }>
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Start | Blog do Mat</title>
      </Head>

      <Header />

      <Menu />

      <PostList posts={props.posts} />

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}
