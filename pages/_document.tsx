import * as React from 'react'

import { ServerStyles, createStylesServer, createGetInitialProps } from '@mantine/next'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()
const stylesServer = createStylesServer()

export default class _Document extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />
      ]
    }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="" // TODO: Add description
          />
          <meta
            name="keywords"
            content={['webdev', 'accessibility'].join(
              ', '
            )}
          />
          <meta name="og:site_name" content="accsensible" />
          <meta
            name="og:title"
            content="" // TODO: Add title
          />
          <meta
            name="og:url"
            content="" // TODO: Add url
          />
          <meta
            name="og:description"
            content="" // TODO: Add description
          />
          <meta name="og:image" content="" />
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
