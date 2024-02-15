import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="FormatFlow">
    <Container my={6}>
      <Title>
        FormatFlow <Badge>2024</Badge>
      </Title>
      <Paragraph>
        FormatFlow es una aplicación para tomar notas sencillas usando Markdown
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://github.com/LaVieja1/format-flow">
            https://github.com/LaVieja1/format-flow
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Electron, React, TailwindCSS, MDXEditor, Jotai</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_formatflow.webp"
        alt="FormatFlow"
      />
    </Container>
  </Layout>
)

export default Project
