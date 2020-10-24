import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'

import { Container } from './styles'

interface Props {
  title: string
  description: string
  slug: string
}

const Share: React.FC<Props> = ({ title, description, slug }) => {
  const shareUrl = process.env.BLOG_URL + '/' + slug
  console.log(slug)

  return (
    <Container>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <EmailShareButton url={shareUrl} subject={title} body={description}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </Container>
  )
}

export { Share }
