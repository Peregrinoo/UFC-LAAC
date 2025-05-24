import {
    AppShell,
    Anchor,
    Container,
    Flex,
    Paper,
    Text,
    Title,
} from "@mantine/core";
import { Navbar } from "../components/Navbar.tsx";
import { useState } from "react";

export default function ReferencesPage() {
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
                        width: "100%",
                        overflow: "hidden",
                        textWrap: "wrap",
                    }}
                >
                    <Container size="lg" px={{ base: "xs", md: 0 }}>
                        <Flex
                            direction="column"
                            gap="xl"
                            align="start"
                            justify="start"
                            style={{ minHeight: "60vh", textAlign: "justify", width: "100%" }}
                        >
                            <Title ta={{ base: "center", md: "start" }}>Referências</Title>

                            <Flex
                                direction="column"
                                gap="lg"
                                w="100%"
                                style={{
                                    wordBreak: "break-word",
                                }}
                            >
                                <Text fw={300}>
                                    HERMAN, L. L.; WEBER, P.; BASHIR, K. Hydrochlorothiazide. [atualizado em 12 nov. 2023]. In: STATPEARLS [Internet]. Treasure
                                    Island (FL): StatPearls Publishing; jan. 2025–. Disponível em:{" "}
                                    <Anchor href="https://www.ncbi.nlm.nih.gov/books/NBK430766/" target="_blank">
                                        https://www.ncbi.nlm.nih.gov/books/NBK430766/
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    KATANIĆ, J. et al. Drug interference with biochemical laboratory
                                    tests. Biochemia Medica (Zagreb), Zagreb, v. 33, n. 2, p. 020601,
                                    2023. DOI: 10.11613/BM.2023.020601. Disponível em:{" "}
                                    <Anchor href="https://www.biochemia-medica.com/en/journal/33/2/10.11613/BM.2023.020601" target="_blank">
                                        https://www.biochemia-medica.com/en/journal/33/2/10.11613/BM.2023.020601
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    LEITOLES, P. J. N. de C.; LENHARDT, M. M.; SILVA, B. K. de F.;
                                    TENFEN, A. Interações fisiológicas causadas por medicamentos em
                                    exames bioquímicos de perfil renal e hepático. Brazilian Journal
                                    of Development, v. 7, n. 1, p. 10329–10348, 2021. DOI:
                                    10.34117/bjdv7n1-702. Disponível em:{" "}
                                    <Anchor href="https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/23862" target="_blank">
                                        https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/23862
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    LORGA FILHO, A. M. et al. Diretrizes brasileiras de
                                    antiagregantes plaquetários e anticoagulantes em cardiologia.
                                    Arquivos Brasileiros de Cardiologia, v. 101, n. 3, p. 01–95, set.
                                    2013.
                                </Text>

                                <Text fw={300}>
                                    MADIRAJU, A. K. et al. Metformin suppresses gluconeogenesis by
                                    inhibiting mitochondrial glycerophosphate dehydrogenase. Nature,
                                    v. 510, n. 7506, p. 542–546, 2014. DOI: 10.1038/nature13270.
                                    Disponível em:{" "}
                                    <Anchor href="https://www.nature.com/articles/nature13270" target="_blank">
                                        https://www.nature.com/articles/nature13270
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    MELO, P. A.; ROCHA, B. G.; OLIVEIRA, W. N.; MENDONÇA, T. S.;
                                    DOMINGUETI, C. P. A. Interferência de medicamentos na avaliação
                                    do perfil lipídico: uma revisão de literatura. RBAC – Revista
                                    Brasileira de Análises Clínicas, v. 54, n. 1, p. 26–30, 2022.
                                    Disponível em:{" "}
                                    <Anchor href="https://www.rbac.org.br/artigos/interferencia-de-medicamentos-na-avaliacao-do-perfil-lipidico-uma-revisao-de-literatura/" target="_blank">
                                        https://www.rbac.org.br/artigos/interferencia-de-medicamentos-na-avaliacao-do-perfil-lipidico-uma-revisao-de-literatura/
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    QURIE, A.; PREUSS, C. V.; MUSA, R. Allopurinol. [atualizado em 26
                                    jun. 2023]. In: STATPEARLS [Internet]. Treasure Island (FL):
                                    StatPearls Publishing; jan. 2025–. Disponível em:{" "}
                                    <Anchor href="https://www.ncbi.nlm.nih.gov/books/NBK499942/" target="_blank">
                                        https://www.ncbi.nlm.nih.gov/books/NBK499942/
                                    </Anchor>. <b>Acesso em: 21 maio 2025.</b>
                                </Text>

                                <Text fw={300}>
                                    XAVIER, H. T. Farmacologia do fibratos. Arquivos Brasileiros de
                                    Cardiologia, v. 85, p. 15–16, out. 2005.
                                </Text>
                            </Flex>
                        </Flex>
                    </Container>
                </Paper>
            </AppShell.Main>
        </AppShell>
    );
}
