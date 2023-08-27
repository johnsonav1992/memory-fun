import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/joy';
import MemoryGameContextProvider from './context/context.tsx';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <React.StrictMode>
        <CssBaseline>
            <MemoryGameContextProvider>
                <App />
            </MemoryGameContextProvider>
        </CssBaseline>
    </React.StrictMode>,
);
