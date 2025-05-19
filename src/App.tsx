import {
  AppShell,
  Container,
  Group,
  Image,
  Text,
  Title,
  Anchor,
  SimpleGrid,
  Card,
  Stack,
  rem,
  Button,
} from '@mantine/core';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import logo from './assets/icon_home.svg'
import slide1 from './assets/slide3.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide1.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomePage() {
  useEffect(() => {
    document.title = 'UFC - Portfólio';
  }, []);


  const exames = [
    { nome: "Ureia", descricao: "Avalia a função renal através da quantidade de ureia no sangue." },
    { nome: "Creatinina", descricao: "Indica a eficiência dos rins na filtração do sangue." },
    { nome: "Fosfatase Alcalina", descricao: "Enzima associada a ossos, fígado e vias biliares." },
    { nome: "AST", descricao: "Avalia possíveis lesões em fígado, coração ou músculos (TGO)." },
    { nome: "Gama-GT", descricao: "Indica lesão hepática, especialmente por álcool ou medicamentos." },
    { nome: "ALT", descricao: "Enzima encontrada no fígado; detecta danos hepáticos (TGP)." },
    { nome: "Colesterol total", descricao: "Mede a quantidade total de colesterol no sangue." },
    { nome: "Triglicerídeos", descricao: "Avalia o nível de gorduras no sangue, importante para o risco cardiovascular." },
    { nome: "Ácido úrico", descricao: "Ajuda no diagnóstico de gota e problemas renais." },
    { nome: "Bilirrubina total", descricao: "Avalia função hepática e possíveis icterícias." },
    { nome: "Glicose", descricao: "Detecta alterações nos níveis de açúcar, identifica diabetes e hipoglicemia." }
  ];

  return (
      <AppShell header={{ height: 90 }} padding="md">
        <AppShell.Header style={{ background: '#04293b' }}>
          <Container size="lg" h="100%" px={{ base: 'xs', md: 0 }}>
            <Group justify="space-between" h="100%" wrap="wrap">
              <Image src={logo} alt="ExaFarm Logo" h={48} w={48} style={{ minWidth: 40 }} />
              <Group visibleFrom="md">
                <Anchor href="#" c="white" underline="never">Início</Anchor>
                <Anchor href="#about" c="white" underline="never">Sobre</Anchor>
                <Anchor href="#areas" c="white" underline="never">Áreas</Anchor>
                <Anchor href="#contact" c="white" underline="never">Contato</Anchor>
              </Group>
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <section id="home" style={{
            paddingTop: rem(80),
            paddingBottom: rem(40),
          }}>
            <Container size="lg" px={{ base: 'xs', md: 0 }}>
              <Container size="lg" px={0}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop
                    style={{
                      height: '70vh',
                      maxWidth: '100vw',
                      margin: '0 auto',
                      borderRadius: 16,
                      overflow: 'hidden',
                      background: '#eee'
                    }}
                >
                  {[slide1, slide2, slide3].map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <Image
                            src={src}
                            alt={`Imagem ${idx + 1}`}
                            radius={0}
                            // maxHeight para desktop e largura 100% para mobile
                            style={{
                              display: 'block',
                              objectFit: 'fill',
                              width: '100%',
                              maxHeight: 600,
                            }}
                        />
                      </SwiperSlide>
                  ))}
                </Swiper>
              </Container>
            </Container>
          </section>

          <section id="about" style={{ padding: '60px 0', background: 'white' }}>
            <Container size="lg" px={{ base: 'xs', md: 0 }}>
              <Title order={2} ta="center" mb="xl" fz={{ base: 24, md: 32 }}>
                Quem Somos?
              </Title>
              <Text mb="lg" fz={{ base: 15, md: 18 }}>
                O site ExaFarm foi elaborado pela Liga Acadêmica de Análises Clínicas da Universidade Federal do Ceará (LAAC-UFC). A LAAC-UFC é um projeto originado no curso de Farmácia-UFC e tem como objetivo realizar atividades que atendam ao tripé universitário, de ensino, pesquisa e extensão, voltadas ao desenvolvimento das análises clínicas.
              </Text>
              <Title order={3} mt="xl" mb="md" fz={{ base: 19, md: 22 }}>
                Objetivos
              </Title>
              <ul style={{ fontSize: 15, paddingLeft: 18, marginBottom: 0 }}>
                <li>Complementar a formação acadêmica no campo das análises clínicas;</li>
                <li>Prestar serviços à comunidade geral por meio de ações de extensão;</li>
                <li>Desenvolver pesquisas para adquirir e difundir conhecimentos científicos;</li>
                <li>Fomentar discussões sobre as áreas das análises clínicas.</li>
              </ul>
            </Container>
          </section>

          <section id="areas" style={{ padding: '60px 0' }}>
            <Container size="lg" px={{ base: 'xs', md: 0 }}>
              <Title order={2} ta="center" mb="xl" fz={{ base: 24, md: 32 }}>
                Marcadores
              </Title>
              <SimpleGrid
                  cols={{ base: 1, xs: 2, md: 3 }}
                  spacing={{ base: 'md', md: 'lg' }}
                  verticalSpacing={{ base: 'md', md: 'lg' }}>
                {exames.map((exame) => (
                    <Card key={exame.nome} shadow="sm" padding="md" radius="md" withBorder>
                      <Stack align="center" gap="sm">
                        <Title order={5} fz={{ base: 16, md: 18 }}>{exame.nome}</Title>
                        <Text ta="center" size="sm" color="dimmed" fz={{ base: 14, md: 15 }}>
                          {exame.descricao}
                        </Text>
                        <Button color="blue">Exibir Dados</Button>
                      </Stack>
                    </Card>
                ))}
              </SimpleGrid>
            </Container>
          </section>

          <section id="contact" style={{ padding: '60px 0', background: 'white' }}>
            <Container size="lg" px={{ base: 'xs', md: 0 }}>
              <Title order={2} ta="center" mb="xl" fz={{ base: 24, md: 32 }}>
                Fale Conosco!
              </Title>
              <Stack align="start" maw={600} mx="auto" gap={8}>
                <Text fz={{ base: 15, md: 16 }}>
                  <strong>Instagram:</strong>{' '}
                  <Anchor href="https://instagram.com/laacufc" target="_blank" c="blue.6">
                    @laacufc
                  </Anchor>
                </Text>
                <Text fz={{ base: 15, md: 16 }}>
                  <strong>E-mail:</strong>{' '}
                  <Anchor href="mailto:laac@ufc.br" c="blue.6">
                    laac@ufc.br
                  </Anchor>
                </Text>
                <Text fz={{ base: 15, md: 16 }}>
                  <strong>Endereço:</strong> sala de Pesquisa de Toxicologia, localizada no 1° andar do Bloco do Curso de Farmácia na Rua Pastor Samuel Munguba, n°1210 – Rodolfo Teófilo, Fortaleza-CE.
                </Text>
              </Stack>
            </Container>
          </section>
        </AppShell.Main>
      </AppShell>
  );
}
