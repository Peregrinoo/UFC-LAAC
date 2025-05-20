import {
  AppShell,
  Container,
  Group,
  Image,
  Text,
  Title,
  Anchor,
  Stack,
  rem,
  Flex,
  Burger,
  Drawer,
  Box,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import logo from './assets/icon_home.svg'
import slide1 from './assets/slide3.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide1.jpg'
import wellcome from './assets/quem_somos.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export default function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    document.title = 'LAAC - Portfólio';
  }, []);
  return (
      <AppShell header={{ height: 90 }} padding="md">
        {/* Mobile Navigation Drawer */}
        <Drawer
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          size="100%"
          padding="md"
          title="Menu"
          zIndex={1000}
        >
          <Stack gap={'xl'}>
            <Anchor 
              href="#" 
              size="lg" 
              onClick={() => setDrawerOpened(false)}
            >
              Início
            </Anchor>
            <Anchor 
              href="#about" 
              size="lg" 
              onClick={() => setDrawerOpened(false)}
            >
              Sobre
            </Anchor>
            <Anchor 
              href="#areas" 
              size="lg" 
              onClick={() => setDrawerOpened(false)}
            >
              Áreas
            </Anchor>
            <Anchor 
              href="#contact" 
              size="lg" 
              onClick={() => setDrawerOpened(false)}
            >
              Contato
            </Anchor>
          </Stack>
        </Drawer>

        <AppShell.Header style={{ background: '#04293b' }}>
          <Container size="lg" h="100%" px={{ base: 'xs', md: 0 }}>
            <Group justify="space-between" h="100%" wrap="nowrap">
              <Image src={logo} alt="ExaFarm Logo" h={48} w={48} style={{ minWidth: 40 }} />

              {/* Desktop Navigation */}
              <Group visibleFrom="md">
                <Anchor href="#" c="white" underline="never">Início</Anchor>
                <Anchor href="/sobre" c="white" underline="never">Sobre</Anchor>
                <Anchor href="/marcadores" c="white" underline="never">Marcadores</Anchor>
                <Anchor href="#contact" c="white" underline="never">Contato</Anchor>
              </Group>

              {/* Mobile Burger Button */}
              <Burger
                opened={drawerOpened}
                onClick={() => setDrawerOpened((o) => !o)}
                hiddenFrom="md"
                color="white"
              />
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <section id="home" style={{}}>
            <Container size="xl" px={{ base: 'xs', md: 0 }}>
              <Container size="lg" px={{ base: 0, md: 0 }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop
                    style={{
                      height: '100%',
                      width: '100%',
                      maxWidth: '100%',
                      margin: '0 auto',
                      borderRadius: 8,
                      overflow: 'hidden',
                      background: '#eee',
                    }}
                >
                  {[slide1, slide2, slide3].map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <Box
                            h={{ base: rem(250), sm: rem(400), md: rem(600), lg: rem(700) }}
                            w="100%"
                        >
                          <Image
                              src={src}
                              alt={`Imagem ${idx + 1}`}
                              radius={0}
                              fit="cover"
                              h="100%"
                              w="100%"
                          />
                        </Box>
                      </SwiperSlide>
                  ))}
                </Swiper>


                <Container size="lg" px={{ base: 'xs', md: 0 }} mt="xl">

                  <Flex 
                    mt="xl" 
                    direction={{ base: 'column', md: 'row' }} 
                    gap={{ base: 'xl', md: 'md' }}
                    align="center"
                  >
                    <Image 
                      src={wellcome} 
                      alt="ExaFarm Logo" 
                      w={{ base: '100%', md: '45%' }} 
                      radius="md"
                      mx={{ base: 'auto', md: 0 }}
                    />

                    <Box w={{ base: '100%', md: '55%' }} px={{ base: 'xs', md: 'md' }}>
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
              <Title order={2} ta="start" mb={{ base: 'lg', md: 'xl' }} fz={{ base: 24, md: 32 }}>
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
