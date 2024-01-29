import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Superhero Memory">
    <Container my={6}>
      <Title>
        Superhero Memory <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Juego de memoria con superheroes usando la SuperHero API
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://lavieja1.github.io/memory-card-game/">
            https://lavieja1.github.io/memory-card-game/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_superheromemory.png"
        alt="Superhero memory"
      />
    </Container>
  </Layout>
)

export default Project
