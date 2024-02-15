import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Roam Rental">
    <Container my={6}>
      <Title>
        Roam Rental <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Proyecto FullStack clon de la página Airbnb Con opciones para buscar
        propiedades para reservar, añadir favoritas, y añadir nuevas.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://roam-rental.vercel.app/">
            https://roam-rental.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, Next-Auth, React, Prisma, TailwindCSS, MongoDB, Cloudinary
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_roamrental.webp"
        alt="Roam Rental"
      />
      <WorkImage src="/images/projects/roamrental.webp" alt="Roam Rental" />
    </Container>
  </Layout>
)

export default Project
