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
  <Layout title="OdinBook">
    <Container my={6}>
      <Title>
        OdinBook <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Intento de clon de la red social Facebook, con funciones y
        características similares
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://top-odin-book-front-end.vercel.app/">
            https://top-odin-book-front-end.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, MondoDB, TailwindCSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/thumbnail_odinbook.png" alt="OdinBook" />
      <WorkImage src="/images/projects/odinbook.png" alt="OdinBook" />
    </Container>
  </Layout>
)

export default Project
