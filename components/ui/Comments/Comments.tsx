import React, { FC } from 'react'
import { FacebookProvider, Comments as FaceComments } from 'react-facebook'

import { Container } from './styles'

interface Props {
  slug: string
}

const Comments: FC<Props> = ({ slug }) => {
  const url = process.env.BLOG_URL + '/' + slug

  return (
    <Container>
      <FacebookProvider appId={process.env.FACEBOOK_APPID}>
        <FaceComments href={url} />
      </FacebookProvider>
    </Container>
  )
}

export default Comments
