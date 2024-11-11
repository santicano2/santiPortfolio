import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Movie Matrix">
    <Container my={6}>
      <Title>
        Pathfinding Visualizer <Badge>2024</Badge>
      </Title>
      <Paragraph>
        App para mostrar el proceso de pathfinding de los algoritmos
        seleccionados. Con opción de elegir algoritmo, laberinto y su velocidad.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://pathfinding-visualizer-rose.vercel.app/">
            https://pathfinding-visualizer-rose.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js, Tailwind CSS, TypeScript</span>
        </ListItem>
      </List>

      <WorkImage
        src="../../images/projects/thumbnail_pathfinding.webp"
        alt="Pathfinding Visualizer"
      />
    </Container>
  </Layout>
)

export default Project
