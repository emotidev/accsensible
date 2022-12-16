import * as React from 'react'

import { createStyles, Header, Container, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start'
    }
  }
}))

export default function MenuHeader () {
  const { classes } = useStyles()

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Text>Accsensible</Text>
      </Container>
    </Header>
  )
}
