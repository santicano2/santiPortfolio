import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="WeText">
    <Container my={6}>
      <Title>
        WeText <Badge>2024</Badge>
      </Title>
      <Paragraph>
        App para mandar mensajes entre usuarios, con autentificación y
        almacenamiento de imagenes
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://top-we-text.vercel.app/">
            https://top-we-text.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, Socket.io, Cloudinary, MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/thumbnail_wetext.png" alt="WeText" />
      <WorkImage src="/images/projects/wetext.png" alt="WeText" />
      <WorkImage src="/images/projects/wetext2.png" alt="WeText" />
    </Container>
  </Layout>
)

export default Project
