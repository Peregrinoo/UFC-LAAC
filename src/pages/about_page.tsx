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
} from "@mantine/core";
import { useState } from "react";
import wellcome from "../assets/quem_somos.jpg";
import logo from "../assets/icon_home.svg";

export default function AboutPage() {
    const [drawerOpened, setDrawerOpened] = useState(false);

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
                    {/* Sobre nós */}
                    <Container size="lg" px={{ base: "xs", md: 0 }}>
                        <Title
                            order={2}
                            ta="center"
                            mb={{ base: "lg", md: "xl" }}
                            fz={{ base: 24, md: 32 }}
                        >
                            Quem somos ?
                        </Title>

                        <Flex
                            direction={{ base: "column", md: "row" }}
                            gap="xl"
                            align="center"
                            justify="center"
                        >
                            <Text fz={{ base: "md", md: "lg" }} ta="justify" w={{ md: "50%" }}>
                                O site ExaFarm foi elaborado pela Liga Acadêmica de Análises
                                Clínicas da Universidade Federal do Ceará (LAAC-UFC). A
                                LAAC-UFC é um projeto originado no curso de Farmácia-UFC e tem
                                como objetivo realizar atividades que atendam ao tripé
                                universitário, de ensino, pesquisa e extensão, voltadas ao
                                desenvolvimento das análises clínicas, com abordagens nas
                                seguintes áreas: hematologia, bioquímica, imunologia, citologia,
                                biologia molecular, microbiologia, parasitologia e toxicologia.
                            </Text>
                            <Image
                                src={wellcome}
                                alt="Imagem de boas-vindas"
                                w={{ base: "100%", md: "50%" }}
                                radius="md"
                            />
                        </Flex>
                    </Container>

                    {/* Objetivos */}
                    <Container size="lg" px={{ base: "xs", md: 0 }} mt="xl">
                        <Title
                            order={2}
                            ta="center"
                            mb={{ base: "lg", md: "xl" }}
                            fz={{ base: 24, md: 32 }}
                        >
                            Objetivos
                        </Title>

                        <Stack gap="lg">
                            <Text fz={{ base: "md", md: "lg" }} ta="justify">
                                A LAAC-UFC tem como público-alvo os estudantes e profissionais
                                da área da saúde, além da comunidade geral. Dessa forma, todas
                                as atividades desenvolvidas buscam:
                            </Text>

                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    listStyleType: "disc",
                                }}
                            >
                                <li>
                                    <Text fz={{ base: "md", md: "lg" }}>
                                        Complementar a formação acadêmica dos estudantes e também
                                        dos profissionais da área da saúde no campo das análises
                                        clínicas;
                                    </Text>
                                </li>
                                <li>
                                    <Text fz={{ base: "md", md: "lg" }}>
                                        Prestar serviços à comunidade geral por meio de ações de
                                        extensão relacionadas às análises clínicas;
                                    </Text>
                                </li>
                                <li>
                                    <Text fz={{ base: "md", md: "lg" }}>
                                        Desenvolver pesquisas na área de análises laboratoriais, com
                                        a finalidade de adquirir e difundir conhecimentos
                                        científicos;
                                    </Text>
                                </li>
                                <li>
                                    <Text fz={{ base: "md", md: "lg" }}>
                                        Fomentar discussões sobre as áreas das análises e suas
                                        abordagens.
                                    </Text>
                                </li>
                            </ul>
                        </Stack>
                    </Container>
                </Paper>
            </AppShell.Main>
        </AppShell>
    );
}
