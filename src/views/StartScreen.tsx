// MUI
import {
    Button
    , Stack
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';

// Context
import { useMemoryGameContext } from '../state/context';

// Assets
import { spaceCards } from '../utils/spaceCards';

const StartScreen = () => {
    const {
        setCurrentScreen, setCurrentDeck
    } = useMemoryGameContext();

    const handleStartGame = () => {
        setCurrentDeck( spaceCards );
        setCurrentScreen( 'game-screen' );
    };

    return (
        <BackgroundSheet>
            <Stack
                alignItems='center'
                p='1rem'
                gap='3rem'
            >
                <Typography
                    level='h1'
                    fontSize='5rem'
                    color='primary'
                >
                    Memory Fun!
                </Typography>
                <Stack gap='6rem'>
                    <Typography
                        level='title-lg'
                        fontStyle='italic'
                        textAlign='center'
                    >
                        Click to get started!
                    </Typography>
                    <Button
                        variant='solid'
                        color='primary'
                        sx={ {
                            fontSize: '2rem'
                            , width: '12rem'
                            , height: '5rem'
                            , boxShadow: theme => theme.shadow.md
                            , '--joy-shadowOpacity': '.4'
                            , borderRadius: '.75rem'
                        } }
                        onClick={ handleStartGame }
                    >
                        { 'Let\'s Go!' }
                    </Button>
                </Stack>
            </Stack>
        </BackgroundSheet>
    );
};

export default StartScreen;
