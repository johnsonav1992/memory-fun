import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/joy';
import { DevTools } from 'jotai-devtools';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <React.StrictMode>
        <CssBaseline>
            <App />
            <DevTools theme='dark' />
        </CssBaseline>
    </React.StrictMode>,
);
