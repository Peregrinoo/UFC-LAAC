import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./App.tsx";
import '@mantine/core/styles.css';
import MarcadoresPage from "./pages/marcadores_page.tsx";
import AboutPage from "./pages/about_page.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage/>} path={'/'}></Route>
                <Route element={<MarcadoresPage/>} path={'/marcadores'}/>
                <Route element={<AboutPage/>} path={'/sobre'}/>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
