import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from './_lib/chromium'
import getThumbnailTemplate from "./_lib/thumbTemplate";

const isDev = !process.env.AWS_REGION

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const title = String(req.query.title)

    if (!title) {
      throw new Error('Title is required')
    }

    const html = getThumbnailTemplate(title);

    const file = await getScreenshot(html, isDev, 1200, 630)

    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
    
    return res.end(file)

    // return res.end(html)
  } catch(err) {
    console.log(err)

    res.status(500).send('Internal server error')
  }
}