// MUI
import { Stack } from '@mui/joy';

// Components
import StartScreen from './views/StartScreen';
import GameScreen from './views/GameScreen';

// State
import { useAtomValue } from 'jotai';
import { currentScreenAtom } from './state/jotai';

function App () {
    const currentScreen = useAtomValue( currentScreenAtom );

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
