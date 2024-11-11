import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Rental Cars">
    <Container my={6}>
      <Title>
        Rental Cars <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Sistema de alquier de autos, con opciones para administrador y clientes.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://autoexpress-rental.vercel.app/">
            https://autoexpress-rental.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, TailwindCSS, Stripe, Prisma, TypeScript, ShadCn, Neon.db
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="../../images/projects/thumbnail_rentalcars.webp"
        alt="Rental Cars"
      />
      <WorkImage
        src="../../images/projects/rentalcars-1.webp"
        alt="Rental Cars"
      />
      <WorkImage
        src="../../images/projects/rentalcars-2.webp"
        alt="Rental Cars"
      />
      <WorkImage
        src="../../images/projects/rentalcars-3.webp"
        alt="Rental Cars"
      />
    </Container>
  </Layout>
)

export default Project
