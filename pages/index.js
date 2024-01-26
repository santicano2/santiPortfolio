import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hola, soy un desarrollador web de Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Santiago Cano
          </Heading>
          <p>Front end developer con conocimientos de back end</p>
        </Box>
      </Box>
      <div>Hola</div>
    </Container>
  )
}

export default Page
