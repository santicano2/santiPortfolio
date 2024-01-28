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
  <Layout title="Etch-A-Sketch">
    <Container my={6}>
      <Title>
        Etch-A-Sketch <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Sitio web para dibujar sobre un canvas, con diferentes colores y opción
        para arcoíris. De los primeros proyectos que hice.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://lavieja1.github.io/etch-a-sketch2023/">
            https://lavieja1.github.io/etch-a-sketch2023/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_etch-a-sketch.png"
        alt="Etch-A-Sketch"
      />
    </Container>
  </Layout>
)

export default Project
