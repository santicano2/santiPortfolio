import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Where's Wally">
    <Container my={6}>
      <Title>
        Where's Wally <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Inspirado en el juego Where&apos;s Wally, donde buscas a los personajes
        en la imagen, con un sistema de puntuación premiando el mejor tiempo
        posible.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://top-wheres-wally-front-end.vercel.app/">
            https://top-wheres-wally-front-end.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, MongoDB</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_willy.png"
        alt="Where's Wally"
      />
      <WorkImage src="/images/projects/willy.png" alt="Where's Wally" />
    </Container>
  </Layout>
)

export default Project
