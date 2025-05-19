import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./App.tsx";
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage/>} path={'/'}></Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
