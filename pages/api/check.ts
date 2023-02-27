import AxePuppeteer from '@axe-core/puppeteer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function check(req: NextApiRequest, res: NextApiResponse) {
  let chrome: {
    executablePath?: string
    args?: string[]
  } = {}
  let puppeteer

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    const { executablePath, args } = (await import('chrome-aws-lambda')).default
    chrome = {
      executablePath: await executablePath,
      args
    }
    puppeteer = (await import('puppeteer-core')).default
  } else {
    puppeteer = (await import('puppeteer')).default
  }

  const { url } = req.query

  try {
    if (typeof url !== 'string') throw new Error('URL is not a string')
    if (
      !url.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)
    ) {
      throw new Error('URL is not valid')
    }

    const browser = await puppeteer.launch({
      executablePath: chrome.executablePath ?? undefined,
      args: chrome.args ?? [],
      headless: true
    })

    const page = await browser.newPage()
    await page.goto(url)

    // @ts-ignore - Puppeteer types are weird, type page is Page | Page but it's always Page
    const results = await new AxePuppeteer(page).analyze()

    await browser.close()

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json(error)
  }
}
