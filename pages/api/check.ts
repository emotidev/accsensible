import type { NextApiRequest, NextApiResponse } from 'next'
import playwright from 'playwright'
import AxeBuilder from '@axe-core/playwright'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  try {
    if (typeof url !== 'string') throw new Error('URL is not a string')

    const browser = await playwright.chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(url)

    const results = await new AxeBuilder({ page }).analyze()

    await browser.close()

    res.json(results)
  } catch (error: unknown) {
    res.status(500).json(error)
    console.log(error)
  }
}
