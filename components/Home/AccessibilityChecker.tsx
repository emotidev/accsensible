'use client'

import * as React from 'react'
import { useState } from 'react'

import AccessibilityResults from './AccessibilityResults'
import axe from 'axe-core'

export default function AccessibilityChecker () {
  const [inputValue, setInputValue] = useState<string>('')
  const [results, setResults] = useState<axe.AxeResults | any>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    fetch(`/api/check?url=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <h1 className="text-center !max-w-prose">
          Identify accessibility issues on any website
        </h1>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 mt-4 text-lg text-slateDark-10 border border-slate-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-9-500 focus:border-transparent max-w-md"
            type="text"
            placeholder="https://example.com"
            value={inputValue}
            onChange={handleChange}
            pattern="https://.*"
            required
          />
          <button
            className="max-w-max flex items-center justify-center w-full px-4 py-2 mt-4 text-lg font-bold text-white bg-indigo-9 border border-transparent rounded-md shadow-sm hover:bg-indigo-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-9"
            type="submit">
            Check
          </button>
        </form>
      </div>

      {results && <AccessibilityResults results={results} />}
    </>
  )
}
