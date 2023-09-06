// Libraries
import { useAtomValue } from 'jotai';

// MUI
import { Stack } from '@mui/joy';

// Components
import StartScreen from './views/StartScreen';
import GameScreen from './views/GameScreen';
import EndGameScreen from './views/EndGameScreen';

// State
import { currentScreenAtom } from './state/jotai';

function App () {
    const currentScreen = useAtomValue( currentScreenAtom );

    const renderScreen = () => {
        switch ( currentScreen ) {
            case 'start-screen': return <StartScreen />;
            case 'game-screen': return <GameScreen />;
            case 'game-over-screen': return <EndGameScreen />;
        }
    };

    return (
        <Stack
            justifyContent='center'
            alignItems='center'
            height='100vh'
            overflow='auto'
            sx={ { backgroundColor: theme => theme.palette.background.level3 } }
        >
            { renderScreen() }
        </Stack>
    );
}

export default App;
