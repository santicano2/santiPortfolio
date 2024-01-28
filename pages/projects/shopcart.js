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
  <Layout title="Shop Cart">
    <Container my={6}>
      <Title>
        Shop Cart <Badge>2023</Badge>
      </Title>
      <Paragraph>Sitio web de compra de ropa usando una API</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://shop-cart-roan.vercel.app/">
            https://shop-cart-roan.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TailwindCSS, Vite</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/thumbnail_shopcart.png"
        alt="Shop Cart"
      />
      <WorkImage src="/images/projects/shopcart.png" alt="Shop Cart" />
    </Container>
  </Layout>
)

export default Project
