import { Analyzer, UserConfig, AnalyzerResult, CreateAnalyzerOptions } from 'hint'
import { NextApiRequest, NextApiResponse } from 'next'

const userConfig: UserConfig = {
  extends: ['accessibility'],
  connector: 'jsdom'
}

const options: CreateAnalyzerOptions = {
  formatters: ['json']
}
const webhint = Analyzer.create(userConfig, options)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  console.log(`Processing ${url}`)

  try {
    if (typeof url !== 'string') throw new Error('URL is not a string')
    const results: AnalyzerResult[] = await webhint.analyze(url, {
      language: 'en'
    })

    res.json(results[0])
  } catch (error: unknown) {
    res.status(500).json(error)
    console.log(error)
  }

  console.log(`Processed ${url}`)
}
