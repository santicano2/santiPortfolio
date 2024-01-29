import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Creador CV">
    <Container my={6}>
      <Title>
        Creador CV <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Sitio web para crear tu CV, con secciones de información personal,
        educación, habilidades y expericiencia
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://lavieja1.github.io/cv-application/">
            https://lavieja1.github.io/cv-application/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_creadorcv.png"
        alt="Creador CV"
      />
    </Container>
  </Layout>
)

export default Project
