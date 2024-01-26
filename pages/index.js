import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hola, soy un desarrollador web de Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Santiago Cano
          </Heading>
          <p>FrontEnd developer + BackEnd</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
