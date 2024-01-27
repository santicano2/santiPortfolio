import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWilly from '../public/images/works/thumbnail_willy.png'
import thumbWeText from '../public/images/works/thumbnail_wetext.png'
import thumbOdinBook from '../public/images/works/thumbnail_odinbook.png'
import thumbsShopCart from '../public/images/works/thumbnail_shopcart.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} my={4}>
        Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="whereswally"
            title="Where's Wally"
            thumbnail={thumbWilly}
          >
            Inspirado en el juego Where&apos;s Wally, con sistema de puntuación.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="wetext" title="WeText" thumbnail={thumbWeText}>
            Una app web de mensaje de texto
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="odinbook"
            title="OdinBook"
            thumbnail={thumbOdinBook}
          >
            Red social imitación de Facebook
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="shopcart"
            title="Shop Cart"
            thumbnail={thumbsShopCart}
          >
            Un sitio web de compra de ropa falsa
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
