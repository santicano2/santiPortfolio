import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Sorting Visualizer">
    <Container my={6}>
      <Title>
        Sorting Visualizer <Badge>2024</Badge>
      </Title>
      <Paragraph>
        App para mostrar el proceso de los algoritmos de ordenamiento
        visualmente. Con opción de elegir algoritmo y su velocidad.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://sorting-visualizer-xi-drab.vercel.app/">
            https://sorting-visualizer-xi-drab.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind CSS, TypeScript</span>
        </ListItem>
      </List>

      <WorkImage
        src="../../images/projects/thumbnail_sorting.webp"
        alt="Sorting Visualizer"
      />
    </Container>
  </Layout>
)

export default Project
