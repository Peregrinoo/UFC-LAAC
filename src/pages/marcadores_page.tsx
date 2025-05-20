import { AppShell, Paper, Drawer, Stack, Anchor, Group, Container, Burger, Image } from "@mantine/core";
import logo from "../assets/icon_home.svg";
import { useState } from "react";
import Marcadores_widget from "./marcadores_widget.tsx";

export default function MarcadoresPage() {
    const [drawerOpened, setDrawerOpened] = useState(false); // Controla o estado do Drawer

    return (
        <AppShell
            header={{ height: 90 }}
            padding="md"
            styles={{
                main: {
                    background: '#f8f9fa', // Fundo da página similar ao Paper anterior
                    height: '100vh'
                }
            }}
        >
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
                        href="/"
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
                        href="#contact"
                        size="lg"
                        onClick={() => setDrawerOpened(false)}
                    >
                        Contato
                    </Anchor>
                </Stack>
            </Drawer>

            {/* Header */}
            <AppShell.Header style={{ background: '#04293b' }}>
                <Container size="lg" h="100%" px={{ base: 'xs', md: 0 }}>
                    <Group justify="space-between" h="100%" wrap="nowrap">
                        <Image src={logo} alt="ExaFarm Logo" h={48} w={48} style={{ minWidth: 40 }} />

                        {/* Desktop Navigation */}
                        <Group visibleFrom="md">
                            <Anchor href="/" c="white" underline="never">Início</Anchor>
                            <Anchor href="/sobre" c="white" underline="never">Sobre</Anchor>
                            <Anchor href="/marcadores" c="white" underline="never">Marcadores</Anchor>
                            <Anchor href="#contact" c="white" underline="never">Contato</Anchor>
                        </Group>

                        {/* Mobile Burger Button */}
                        <Burger
                            opened={drawerOpened}
                            onClick={() => setDrawerOpened(!drawerOpened)}
                            hiddenFrom="md"
                            color="white"
                        />
                    </Group>
                </Container>
            </AppShell.Header>

            {/* Main Content */}
            <AppShell.Main>
                <Paper
                    style={{
                        height: '100%',
                        width: '100%',
                        background: 'transparent', // Mantém a mesma estilização original
                    }}
                >
                    <Marcadores_widget />
                </Paper>
            </AppShell.Main>
        </AppShell>
    );
}
