import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Patient Management">
    <Container my={6}>
      <Title>
        Patient Management <Badge>2024</Badge>
      </Title>
      <Paragraph>
        Sistema de turnos para pacientes de obra social/hospital. Con opciones
        para pacientes y administrador.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://patient-management-seven.vercel.app/">
            https://patient-management-seven.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TailwindCSS, TypeScript, ShadCn, Appwrite</span>
        </ListItem>
      </List>

      <WorkImage
        src="../../images/projects/thumbnail_patient.webp"
        alt="Patient Management"
      />
      <WorkImage
        src="../../images/projects/patient.webp"
        alt="Patient Management"
      />
    </Container>
  </Layout>
)

export default Project
