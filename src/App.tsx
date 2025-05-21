import {
  AppShell,
  Container,
  Text,
  Title,
  Anchor,
  Stack,
  Flex,
  Box,
} from '@mantine/core';
import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import SliderCarousel from "./components/SliderWidget.tsx";

export default function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    document.title = 'LAAC - Portfólio';
  }, []);
  return (
      <AppShell header={{ height: 90 }} padding="md">
        <Navbar drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />

        <AppShell.Main>
          <section id="home" style={{}}>
            <Container size="xl" px={{ base: 'xs', md: 0 }}>
              <Container size="lg" px={{ base: 0, md: 0 }}>

                <SliderCarousel/>

                <Container size="lg" px={{ base: 'xs', md: 0 }} mt="xl">

                  <Flex 
                    mt="xl" 
                    direction={{ base: 'column', md: 'row' }} 
                    gap={{ base: 'xl', md: 'md' }}
                    align="start"
                  >

                    <Box w={{ base: '100%', md: '100%' }} px={{ base: 'xs', md: 'md' }}>
                      <Title order={2} ta={{ base: 'center', md: 'left' }} mb="xl" fz={{ base: 24, md: 32 }}>
                        Bem-vindo ao ExaFarm!
                      </Title>
                      <Text mb="lg" fz={{ base: 15, md: 18 }}>
                        O ExaFarm é um site desenvolvido para facilitar o acesso a informações sobre exames laboratoriais. Aqui você encontrará dados relevantes sobre diversos exames, suas indicações e interpretações.
                      </Text>
                      <Text mb="lg" fz={{ base: 15, md: 18 }}>
                        Navegue pelas seções para conhecer mais sobre nós e os exames disponíveis.
                      </Text>
                    </Box>
                  </Flex>

                </Container>
              </Container>
            </Container>
          </section>

          <section id="contact" style={{ 
            padding: '40px',
            background: 'white' 
          }}>
            <Container size="lg" px={{ base: 'xs', md: 0 }}>
              <Title order={2} ta={{base: "center", md: "start"}} mb={{ base: 'lg', md: 'xl' }} fz={{ base: 24, md: 32 }}>
                Fale Conosco!
              </Title>
              <Flex 
                justify="start"
                mt={{ base: 'md', md: 'xl' }}
                direction="column"
                align="start"
              >
                <Stack 
                  maw={'100%'}
                  mx="auto" 
                  w="100%"
                  align={'start'}
                  px={{ base: 'xs', sm: 0 }}
                >
                  <Text fz={{ base: 15, md: 16 }} ta={{ base: 'center', sm: 'left' }} w="100%">
                    <strong>Instagram:</strong>{' '}
                    <Anchor href="https://instagram.com/laacufc" target="_blank" c="blue.6">
                      @laacufc
                    </Anchor>
                  </Text>
                  <Text fz={{ base: 15, md: 16 }} ta={{ base: 'center', sm: 'left' }} w="100%">
                    <strong>E-mail:</strong>{' '}
                    <Anchor href="mailto:laac@ufc.br" c="blue.6">
                      laac@ufc.br
                    </Anchor>
                  </Text>
                  <Text fz={{ base: 15, md: 16 }} ta={{ base: 'center', sm: 'left' }} w="100%">
                    <strong>Endereço:</strong> sala de Pesquisa de Toxicologia, localizada no 1° andar do Bloco do Curso de Farmácia na Rua Pastor Samuel Munguba, n°1210 – Rodolfo Teófilo, Fortaleza-CE.
                  </Text>
                </Stack>
              </Flex>

              {/* Adicionando o mapa do Leaflet */}
              <Box 
                w="100%" 
                h={{ base: '300px', sm: '350px', md: '400px' }} 
                mt={{ base: 'md', md: 'xl' }}
                style={(theme) => ({
                  borderRadius: theme.radius.md,
                  overflow: 'hidden',
                  boxShadow: theme.shadows.sm,
                })}
              >
                <MapContainer
                    center={[-3.7465, -38.5483]} // Coordenadas da UFC
                    zoom={17}
                    style={{ width: '100%', height: '100%' }}
                    zoomControl={false} // Move zoom controls for better mobile experience
                >
                  {/* Camada principal do mapa */}
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Marcador da UFC */}
                  <Marker position={[-3.7465, -38.5483]}>
                    <Popup>
                      LIGA ACADEMICA DE ANALISES CLINICAS - UFC<br /> Fortaleza-CE
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </Container>
          </section>
        </AppShell.Main>

      </AppShell>
  );
}
