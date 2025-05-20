import {
    AppShell,
    Paper,
    Drawer,
    Stack,
    Container,
    Title,
    Flex,
    Text,
    Image,
    Anchor,
    Group,
    Burger,
    Button,
} from "@mantine/core";
import { useState } from "react";
import logo from "../assets/icon_home.svg";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <AppShell
            header={{ height: 90 }}
            padding="md"
            styles={{
                main: { background: "#f8f9fa", minHeight: "100vh" },
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
                <Stack gap="xl">
                    <Anchor href="/" size="lg" onClick={() => setDrawerOpened(false)}>
                        Início
                    </Anchor>
                    <Anchor href="/sobre" size="lg" onClick={() => setDrawerOpened(false)}>
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
            <AppShell.Header style={{ background: "#04293b" }}>
                <Container size="lg" h="100%" px={{ base: "xs", md: 0 }}>
                    <Group justify="space-between" wrap="nowrap" h="100%">
                        <Image src={logo} alt="ExaFarm Logo" h={90} w={90} />

                        {/* Desktop Navigation */}
                        <Group visibleFrom="md">
                            <Anchor href="/" c="white" underline="never">
                                Início
                            </Anchor>
                            <Anchor href="/sobre" c="white" underline="never">
                                Sobre
                            </Anchor>
                            <Anchor href="/marcadores" c="white" underline="never">
                                Marcadores
                            </Anchor>
                            <Anchor href="#contact" c="white" underline="never">
                                Contato
                            </Anchor>
                        </Group>

                        {/* Mobile Burger Menu */}
                        <Burger
                            opened={drawerOpened}
                            onClick={() => setDrawerOpened((o) => !o)}
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
                        background: "transparent",
                        padding: "40px 0",
                    }}
                >
                    <Container size="lg" px={{ base: "xs", md: 0 }}>
                        <Flex
                            direction="column"
                            gap="xl"
                            align="center"
                            justify="center"
                            style={{ minHeight: "60vh" }}
                        >
                            <Title
                                order={1}
                                ta="center"
                                fz={{ base: 32, md: 48 }}
                                c="#04293b"
                            >
                                404
                            </Title>
                            <Title
                                order={2}
                                ta="center"
                                fz={{ base: 24, md: 32 }}
                            >
                                Página não encontrada
                            </Title>
                            <Text fz={{ base: "md", md: "lg" }} ta="center" maw={600} mx="auto">
                                A página que você está procurando não existe ou foi movida.
                            </Text>
                            <Button
                                size="lg"
                                onClick={() => navigate("/")}
                                style={{ background: "#04293b", marginTop: "20px" }}
                            >
                                Voltar para a página inicial
                            </Button>
                        </Flex>
                    </Container>
                </Paper>
            </AppShell.Main>
        </AppShell>
    );
}
