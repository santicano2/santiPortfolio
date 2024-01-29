/* eslint-disable react-hooks/rules-of-hooks */
import NextLink from 'next/link'
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button,
  useColorModeValue,
  Box
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'

import thumbWilly from '../public/images/projects/thumbnail_willy.png'
import thumbWeText from '../public/images/projects/thumbnail_wetext.png'
import thumbOdinBook from '../public/images/projects/thumbnail_odinbook.png'
import thumbShopCart from '../public/images/projects/thumbnail_shopcart.png'
import thumbCreadorCV from '../public/images/projects/thumbnail_creadorcv.png'
import thumbSuperheroMemory from '../public/images/projects/thumbnail_superheromemory.png'
import thumbBattleship from '../public/images/projects/thumbnail_battleship.png'
import thumbEtchASketch from '../public/images/projects/thumbnail_etch-a-sketch.png'

const projects = () => (
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
            Sitio web de compra de ropa usando una API
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

      <Box textAlign="center" my={2} mb={4}>
        <Button
          as={NextLink}
          href="https://github.com/LaVieja1"
          scroll={false}
          rightIcon={<IoLogoGithub />}
          colorScheme={useColorModeValue('blue', 'red')}
        >
          Más proyectos
        </Button>
      </Box>
    </Container>
  </Layout>
)

export default projects
export { getServerSideProps } from '../components/chakra'
