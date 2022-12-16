import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import dynamic from 'next/dynamic'

import { MantineProvider, createEmotionCache, AppShell } from '@mantine/core'

import Head from 'next/head'
import LoadProgress from 'components/Layout/LoadProgress'
const MenuHeader = dynamic(() => import('components/Layout/MenuHeader'))

const mantineCache = createEmotionCache({ key: 'mantine' })

function App ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>
          {
            // TODO: Add title
          }
        </title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          cursorType: 'pointer',
          loader: 'bars',
          primaryColor: 'violet'
        }}
        emotionCache={mantineCache}
      >
        <LoadProgress />
        <AppShell header={<MenuHeader />}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </div>
  )
}

export function reportWebVitals (metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default App
