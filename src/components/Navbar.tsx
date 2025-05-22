import {
  AppShell,
  Container,
  Group,
  Image,
  Anchor,
  Burger,
  Drawer,
  Stack, Text,
} from '@mantine/core';
import logo from '../assets/icon_home.svg';

interface NavbarProps {
  drawerOpened: boolean;
  setDrawerOpened: (opened: boolean | ((o: boolean) => boolean)) => void;
}

export function Navbar({ drawerOpened, setDrawerOpened }: NavbarProps) {
  return (
    <>
      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        size="100%"
        padding="md"
        title={<Text fw={700}>Menu de navegação</Text>}
        position="left"
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
            href="/sobre"
            size="lg" 
            onClick={() => setDrawerOpened(false)}
          >
            Sobre
          </Anchor>
          <Anchor
              href="/marcadores"
              size="lg"
              onClick={() => setDrawerOpened(false)}
          >
            Marcadores
          </Anchor>
          <Anchor
              href="/referencias"
              size="lg"
              onClick={() => setDrawerOpened(false)}
          >
            Referências
          </Anchor>
          <Anchor 
            href=".#contact"
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
            <Image src={logo} alt="ExaFarm Logo" h={90} w={90} style={{ minWidth: 40 }} />

            {/* Desktop Navigation */}
            <Group visibleFrom="md">
              <Anchor href="#" c="white" underline="never">Início</Anchor>
              <Anchor href="/sobre" c="white" underline="never">Sobre</Anchor>
              <Anchor href="/marcadores" c="white" underline="never">Marcadores</Anchor>
              <Anchor href="/referencias" c="white" underline="never">Referências</Anchor>
              <Anchor href=".#contact" c="white" underline="never">Contato</Anchor>
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
    </>
  );
}
