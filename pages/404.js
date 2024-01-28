import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">No encontrado</Heading>
      <Text>La página que estas buscando no fue encontrada.</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Button
          as={NextLink}
          href="/"
          colorScheme={useColorModeValue('blue', 'red')}
        >
          Volver al inicio
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
