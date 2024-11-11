import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Movie Matrix">
    <Container my={6}>
      <Title>
        Movie Matrix <Badge>2024</Badge>
      </Title>
      <Paragraph>
        App web para buscar peliculas y ver informacion de ellas.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://movie-matrix-tv.vercel.app/">
            https://movie-matrix-tv.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, TypeScript, ShadCn, TailwindCSS, FramerMotion, TMDB
            API
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="https://github.com/LaVieja1/movie-matrix/assets/65514301/f08f0d9b-338e-4c52-b829-2e196a71c1c0"
        alt="Movie Matrix"
      />
      <WorkImage
        src="https://github.com/LaVieja1/movie-matrix/assets/65514301/657b548a-de53-4ac3-a242-e4deaeaa1543"
        alt="Movie Matrix"
      />
      <WorkImage
        src="https://github.com/LaVieja1/movie-matrix/assets/65514301/d06494f4-af10-4fa5-acaf-388fe37d8368"
        alt="Movie Matrix"
      />
    </Container>
  </Layout>
)

export default Project
