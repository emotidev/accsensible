import type { NextPage } from 'next'

import * as React from 'react'

import AccessibilityChecker from 'components/Home/AccessibilityChecker'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('components/Home/Hero'))

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AccessibilityChecker />
    </>
  )
}

export default Home
