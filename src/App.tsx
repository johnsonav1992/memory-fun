// MUI
import { Stack } from '@mui/joy';

// Components
import StartScreen from './views/StartScreen';

// Context
import MemoryGameContextProvider from './context/context';

function App () {
    return (
        <MemoryGameContextProvider>
            <Stack
                justifyContent='center'
                alignItems='center'
                height='100vh'
                sx={ { backgroundColor: 'background.backdrop' } }
            >
                <StartScreen />
            </Stack>
        </MemoryGameContextProvider>
    );
}

export default App;
