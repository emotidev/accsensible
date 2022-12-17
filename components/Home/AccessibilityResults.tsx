import * as React from 'react'

import { AnalyzerResult } from 'hint'

import { useState } from 'react'
import { createStyles, Table, ScrollArea, Container, Text } from '@mantine/core'
import Link from 'next/link'

export default function AccessibilityResults (results: AnalyzerResult) {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = results.problems.map((problem, index) => (
    <tr key={index}>
      <td><Text size="md" sx={{ maxWidth: '30vw' }}>{problem.message}</Text></td>
      <td><Text size="md">{problem.documentation ? (<Link href={problem.documentation[0].link}>{problem.documentation[0].text}</Link>) : '-'}</Text></td>
    </tr>
  ))

  return (
    <Container sx={{ minWidth: '80vw', display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
    <ScrollArea sx={{ height: '50vh' }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table sx={{ maxWidth: 'max-content' }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th><Text size="xl">Problem</Text></th>
            <th><Text size="xl">Learn more</Text></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </Container>
  )
}

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`
    }
  },

  scrolled: {
    boxShadow: theme.shadows.sm
  }
}))
