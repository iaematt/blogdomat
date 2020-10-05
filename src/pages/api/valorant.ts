import { NextApiRequest, NextApiResponse } from "next";
import getValorantTemplate from './_templates/valorantTemplate'

export default async function (request: NextApiRequest, response: NextApiResponse) {
  const html = getValorantTemplate()

  response.setHeader('Content-Type', 'text/html')
  return response.end(html)
}