import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Mini Linkio">
    <Container my={6}>
      <Title>
        Mini Linkio <Badge>2024</Badge>
      </Title>
      <Paragraph>Recortador de links</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://minilinkio.cyclic.app/">
            https://minilinkio.cyclic.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express, MongoDB, Nanoid, EJS, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_minilinkio.webp"
        alt="Mini Linkio"
      />
    </Container>
  </Layout>
)

export default Project
