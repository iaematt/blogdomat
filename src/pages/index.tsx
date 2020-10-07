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

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>start | blogdom4t</title>
      </Head>

      <Header />
      <PageTitle title="Simples e minimalista, como deve ser.">
        Blog desenvolvido usando Next.js, Typescript, React.js,
        <br />
        styled-components e markdown... hospedado na famosa vercel.
      </PageTitle>

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
