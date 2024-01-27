/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Heading,
  Stack,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react'
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
        <Tooltip label="HTML5">
          <span>
            <HTMLIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="CSS">
          <span>
            <CSSIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="JavaScript">
          <span>
            <JSIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="TypeScript">
          <span>
            <TSIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="React">
          <span>
            <ReactIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Tailwind CSS">
          <span>
            <TailWindIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Next.js">
          <span>
            <NextIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Chakra UI">
          <span>
            <ChakraIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Vite.js">
          <span>
            <ViteIcon boxSize={8} />
          </span>
        </Tooltip>
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
        <Tooltip label="Node.js">
          <span>
            <NodeIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Express">
          <span>
            <ExpressIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="MongoDB">
          <span>
            <MongodbIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="JWT">
          <span>
            <JWTIcon boxSize={8} />
          </span>
        </Tooltip>
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
        <Tooltip label="Vercel">
          <span>
            <VercelIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Netlify">
          <span>
            <NetlifyIcon boxSize={8} />
          </span>
        </Tooltip>
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
        <Tooltip label="C">
          <span>
            <CIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Java">
          <span>
            <JavaIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Cloudinary">
          <span>
            <CloudinaryIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Git">
          <span>
            <GitIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="GitHub">
          <span>
            <GitHubIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Notion">
          <span>
            <NotionIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="NPM">
          <span>
            <NPMIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="Postman">
          <span>
            <PostmanIcon boxSize={8} />
          </span>
        </Tooltip>
        <Tooltip label="VS Code">
          <span>
            <VSCodeIcon boxSize={8} />
          </span>
        </Tooltip>
      </Stack>
    </Box>
  </Section>
)

export default StackSection
