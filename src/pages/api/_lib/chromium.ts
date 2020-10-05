import puppeteer, { Page } from 'puppeteer-core'
import { getOptions } from './chromiumOptions'

let _page: Page | null

async function getPage(isDev: boolean) {
  if (_page) {
    return _page
  }

  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)

  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(
  html: string,
  isDev: boolean,
  width: number,
  height: number
) {
  const page = await getPage(isDev)

  await page.setViewport({ width, height })
  await page.setContent(html)

  const file = await page.screenshot({ type: 'png' })

  return file
}