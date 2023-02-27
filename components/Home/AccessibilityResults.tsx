import * as React from 'react'

import axe from 'axe-core'

export default function AccessibilityResults({
  results
}: {
  results: axe.AxeResults
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <details className="w-full flex justify-evenly">
        <summary className="max-w-full flex">
          <h2 className="text-center !max-w-prose !mb-8">
            {results.violations.length} accessibility issues found {'('}click to
            view {')'}
          </h2>
        </summary>
        <ul className="flex flex-col w-full mt-4 space-y-4">
          {results.violations.map((violation) => (
            <div key={violation.id}>
              <h3 className="text-lg font-bold">{violation.description}</h3>
              <ul className="flex flex-col w-full mt-2 space-y-2">
                {violation.nodes.map((node) => (
                  <li key={node.html}>
                    <p className="text-sm">{node.failureSummary}</p>
                    <pre className="w-full p-4 mt-2 text-sm bg-slate-3 rounded-md">
                      {node.html}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </details>
      <details className="w-full flex justify-evenly">
        <summary className="max-w-full flex">
          <h2 className="text-center !max-w-prose !mb-8">
            {results.incomplete.length} incomplete issues found {'('}click to
            view {')'}
          </h2>
        </summary>
        <ul className="flex flex-col w-full mt-4 space-y-4">
          {results.incomplete.map((incomplete) => (
            <div key={incomplete.id}>
              <h3 className="text-lg font-bold">{incomplete.description}</h3>
              <ul className="flex flex-col w-full mt-2 space-y-2">
                {incomplete.nodes.map((node) => (
                  <li key={node.html}>
                    <p className="text-sm">{node.failureSummary}</p>
                    <pre className="w-full p-4 mt-2 text-sm bg-slate-3 rounded-md">
                      {node.html}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </details>
      <details className="w-full flex justify-evenly">
        <summary className="max-w-full flex">
          <h2 className="text-center !max-w-prose !mb-8">
            {results.passes.length} passes found {'('}click to view {')'}
          </h2>
        </summary>
        <ul className="flex flex-col w-full mt-4 space-y-4">
          {results.passes.map((pass) => (
            <div key={pass.id}>
              <h3 className="text-lg font-bold">{pass.description}</h3>
              <ul className="flex flex-col w-full mt-2 space-y-2">
                {pass.nodes.map((node) => (
                  <li key={node.html}>
                    <p className="text-sm">{node.failureSummary}</p>
                    <pre className="w-full p-4 mt-2 text-sm bg-slate-3 rounded-md">
                      {node.html}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </details>
    </div>
  )
}
