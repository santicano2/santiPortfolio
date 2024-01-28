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
  <Layout title="Battleship">
    <Container my={6}>
      <Title>
        Battleship <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Juego clasíco de la batalla naval, se pueden colocar las flotas
        manualmente o auto-colocar
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://lavieja1.github.io/battleship2023/">
            https://lavieja1.github.io/battleship2023/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, Webpack, Jest</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_battleship.png"
        alt="Battleship"
      />
      <WorkImage src="/images/projects/battleship.png" alt="Battleship" />
    </Container>
  </Layout>
)

export default Project
