import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWilly from '../public/images/works/thumbnail_willy.png'
import thumbWeText from '../public/images/works/thumbnail_wetext.png'
import thumbOdinBook from '../public/images/works/thumbnail_odinbook.png'
import thumbShopCart from '../public/images/works/thumbnail_shopcart.png'
import thumbCreadorCV from '../public/images/works/thumbnail_creadorcv.png'
import thumbSuperheroMemory from '../public/images/works/thumbnail_superheromemory.png'
import thumbBattleship from '../public/images/works/thumbnail_battleship.png'
import thumbEtchASketch from '../public/images/works/thumbnail_etch-a-sketch.png'

const Works = () => (
  <Layout title="Proyectos">
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
            thumbnail={thumbShopCart}
          >
            Un sitio web de compra de ropa falsa
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Proyectos antiguos
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="creadorcv"
            title="Creador CV"
            thumbnail={thumbCreadorCV}
          >
            Un creador de CV con opción de imprimir
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="superheromemory"
            title="Superhero Memory"
            thumbnail={thumbSuperheroMemory}
          >
            Juego de memoria usando una API de superheroes
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="battleship"
            title="Battleship"
            thumbnail={thumbBattleship}
          >
            Juego de batalla naval
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="etch-a-sketch"
            title="Etch-A-Sketch"
            thumbnail={thumbEtchASketch}
          >
            Sitio web para dibujar con varias opciones
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
