import * as React from 'react'

import { TextInput, ActionIcon, useMantineTheme, Container, Space } from '@mantine/core'
import { IconArrowRight, IconArrowLeft, IconAccessible } from '@tabler/icons'
import { useState } from 'react'

import axios from 'axios'
import AccessibilityResults from './AccessibilityResults'

export default function AccessibilityChecker () {
  const theme = useMantineTheme()

  const [inputValue, setInputValue] = useState<string>('')
  const [results, setResults] = useState<null | any>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    axios
      .get(`/api/check?url=${inputValue}`)
      .then((response) => {
        setResults(response.data)

        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
    <Container size={800}>
    <TextInput
      icon={<IconAccessible size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={handleSubmit} >
          {theme.dir === 'ltr'
            ? (
              <IconArrowRight size={18} stroke={1.5} />
              )
            : (
              <IconArrowLeft size={18} stroke={1.5} />
              )}
        </ActionIcon>
      }
      placeholder="Enter a URL to check"
      rightSectionWidth={42}
      onChange={handleChange}
      onSubmit={handleSubmit}
      value={inputValue}
    />
    </Container>
    <Space h="xl"></Space>
    <Space h="xl"></Space>
    {results && <AccessibilityResults url={results.url} problems={results.problems} />}
    </>
  )
}
