import {
    AppShell,
    Paper,
    Container,
    Title,
    Flex,
    Text,
    Image,
} from "@mantine/core";
import { useState } from "react";
import wellcome from "../assets/quem_somos.jpg";
import { Navbar } from "../components/Navbar";

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
            <Navbar drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />

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
