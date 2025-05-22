import {
    AppShell,
    Paper,
    Container,
    Title,
    Flex,
    Text,
    Button,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

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
            <Navbar drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />

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
