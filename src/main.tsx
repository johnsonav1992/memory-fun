import React from 'react';
import ReactDOM from 'react-dom/client';

// Libraries
import { DevTools } from 'jotai-devtools';

// MUI
import { CssBaseline } from '@mui/joy';

// Components
import App from './App.tsx';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <React.StrictMode>
        <CssBaseline>
            <App />
            <DevTools theme='dark' />
        </CssBaseline>
    </React.StrictMode>,
);
