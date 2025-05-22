import { AppShell, Paper } from "@mantine/core";
import { useState } from "react";
import Marcadores_widget from "../components/MarcadoresWidget.tsx";
import { Navbar } from "../components/Navbar";

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
            <Navbar drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />

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
