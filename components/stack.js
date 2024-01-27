/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Section from './section'
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

const StackSection = () => (
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
)

export default StackSection
