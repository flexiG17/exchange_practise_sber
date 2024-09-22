import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#014270',
        },
        secondary: {
            main: '#4A94FF',
        },
        textDisabled: {
            main: '#7E868E'
        },
        textSecondary: {
            main: '#FFF'
        }
    },
    typography: {
        fontFamily: ['montserrat'].join(',')
    }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
            
        </Router>
    </StrictMode>,
)
