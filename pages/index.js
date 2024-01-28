import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import StackSection from '../components/stack'
import Image from 'next/image'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={6}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Santiago Cano
            </Heading>
            <p>Desarrollador web | FrontEnd developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
              borderWidth={3}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/santi.jpeg"
                alt="Foto de perfil"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Sobre mí
          </Heading>
          <Paragraph>
            Me llamo Santi, tengo 21 años y vivo en Buenos Aires, Argentina. Soy
            un desarrollador web enfocado en Front End con conocimientos en Back
            End.
          </Paragraph>
          <Paragraph>
            Desde pequeño me encantan las computadoras y todo lo que tenga que
            ver con la tecnología. En mi adolescencia descubrí la programación
            pero no fue hasta 2022 que decidí dedicarme a esta hermosa
            profesión. Hoy en día cuento con experiencia construyendo sitios y
            aplicaciones web.
          </Paragraph>
          <Paragraph>
            Actualmente estoy estudiando la carrera Licenciatura en Sistemas en
            la Universidad Nacional de Lanús (UNLa).
          </Paragraph>
          <Box textAlign="center" my={6}>
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('blue', 'red')}
            >
              Mi portfolio
            </Button>
          </Box>
        </Section>

        <StackSection />
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
