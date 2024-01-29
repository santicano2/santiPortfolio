import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { Analytics } from '@vercel/analytics/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Santi Portfolio" />
        <meta name="author" content="Santiago Cano" />
        <meta name="author" content="LaVieja1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        ></link>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Santiago Cano" />
        <meta name="og:title" content="Santiago Cano" />
        <meta property="og:type" content="website" />
        <title>Home - Santiago Cano</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
        <Analytics />
      </Container>
    </Box>
  )
}

export default Main
