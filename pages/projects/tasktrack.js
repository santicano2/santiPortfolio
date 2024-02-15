import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Task-Track">
    <Container my={6}>
      <Title>
        Task-Track <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Proyecto FullStack imitando a la página Trello. Con opciones de crear
        organizaciones, tableros, listas y tarjetas. Todas con función de
        editar, copiar y borrar. Para crear más de 5 tableros se debe pagar el
        plan pro.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://task-track-beta.vercel.app/">
            https://task-track-beta.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, React, Prisma, Stripe, TailwindCSS, MySQL, Clerk</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_tasktrack.webp"
        alt="Task-Track"
      />
      <WorkImage src="/images/projects/tasktrack.webp" alt="Task-Track" />
    </Container>
  </Layout>
)

export default Project
