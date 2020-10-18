import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import getThumbnailTemplate from './_lib/thumbTemplate'

const isDev = !process.env.AWS_REGION

export default async function (
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const title = String(Request.query.title)
    const icon = String(Request.query.icon)

    if (!title) {
      throw new Error('Title is required')
    }

    const html = getThumbnailTemplate(title, icon)

    // PRODUCTION
    const file = await getScreenshot(html, isDev, 1200, 630)

    Response.setHeader('Content-Type', 'image/png')
    Response.setHeader(
      'Cache-control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )

    return Response.end(file)

    // DEVELOPMENT
    // Response.setHeader('Content-Type', 'text/html')
    // return Response.end(html)
  } catch (err) {
    console.log(err)

    Response.status(500).send('Internal server error')
  }
}
