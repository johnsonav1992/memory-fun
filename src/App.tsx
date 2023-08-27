// MUI
import { Stack } from '@mui/joy';

// Components
import StartScreen from './views/StartScreen';
import GameScreen from './views/GameScreen';

// Context
import { useMemoryGameContext } from './context/context';

function App () {
    const { currentScreen } = useMemoryGameContext();

    return (
        <Stack
            justifyContent='center'
            alignItems='center'
            height='100vh'
            sx={ { backgroundColor: theme => theme.palette.background.level3 } }
        >
            {
                currentScreen === 'start-screen'
                    ? <StartScreen />
                    : <GameScreen />
            }
        </Stack>
    );
}

export default App;
