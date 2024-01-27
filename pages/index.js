import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Stack
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  TailWindIcon,
  NextIcon,
  ChakraIcon,
  ViteIcon
} from '../components/icons/stack/frontIcons'
import {
  NodeIcon,
  ExpressIcon,
  MongodbIcon,
  JWTIcon
} from '../components/icons/stack/backIcons'
import {
  CIcon,
  JavaIcon,
  CloudinaryIcon,
  GitIcon,
  GitHubIcon,
  NotionIcon,
  NPMIcon,
  PostmanIcon,
  VSCodeIcon
} from '../components/icons/stack/otherIcons'
import { VercelIcon, NetlifyIcon } from '../components/icons/stack/hostingIcons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hola, soy un desarrollador web de Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Santiago Cano
          </Heading>
          <p>FrontEnd developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAplha.800"
            borderWidth={2}
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
          Desde pequeño me encantan las computadoras y todo lo que tenga que ver
          con la tecnología. En mi adolescencia descubrí la programación pero no
          fue hasta 2022 que decidí dedicarme a esta hermosa profesión. Hoy en
          día cuento con experiencia construyendo sitios y aplicaciones web.
        </Paragraph>
        <Paragraph>
          Actualmente estoy estudiando la carrera Licenciatura en Sistemas en la
          Universidad Nacional de Lanús (UNLa).
        </Paragraph>
        <Box textAlign="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Mi portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Stack
        </Heading>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          <Heading as="h4" size="md" marginBottom={2}>
            FrontEnd
          </Heading>
          <Stack
            direction={{ base: 'row', xs: 'column' }}
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            spacing="18px"
            wrap={'wrap'}
          >
            <HTMLIcon boxSize={8} />
            <CSSIcon boxSize={8} />
            <JSIcon boxSize={8} />
            <TSIcon boxSize={8} />
            <ReactIcon boxSize={8} />
            <TailWindIcon boxSize={8} />
            <NextIcon boxSize={8} />
            <ChakraIcon boxSize={8} />
            <ViteIcon boxSize={8} />
          </Stack>
        </Box>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          <Heading as="h4" size="md" marginBottom={2}>
            BackEnd
          </Heading>
          <Stack
            direction={{ base: 'row', xs: 'column' }}
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            spacing="18px"
            wrap={'wrap'}
          >
            <NodeIcon boxSize={8} />
            <ExpressIcon boxSize={8} />
            <MongodbIcon boxSize={8} />
            <JWTIcon boxSize={8} />
          </Stack>
        </Box>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          <Heading as="h4" size="md" marginBottom={2}>
            Hosting
          </Heading>
          <Stack
            direction={{ base: 'row', xs: 'column' }}
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            spacing="18px"
            wrap={'wrap'}
          >
            <VercelIcon boxSize={8} />
            <NetlifyIcon boxSize={8} />
          </Stack>
        </Box>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          <Heading as="h4" size="md" marginBottom={2}>
            Otros
          </Heading>
          <Stack
            direction={{ base: 'row', xs: 'column' }}
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            spacing="18px"
            wrap={'wrap'}
          >
            <CIcon boxSize={8} />
            <JavaIcon boxSize={8} />
            <CloudinaryIcon boxSize={8} />
            <GitIcon boxSize={8} />
            <GitHubIcon boxSize={8} />
            <NotionIcon boxSize={8} />
            <NPMIcon boxSize={8} />
            <PostmanIcon boxSize={8} />
            <VSCodeIcon boxSize={8} />
          </Stack>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
