// Libraries
import {
    useAtom
    , useSetAtom
} from 'jotai';

// MUI
import {
    Button
    , Radio
    , RadioGroup
    , Stack
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';

// State
import {
    currentDeckAtom
    , currentScreenAtom
    , gamePlayersNumberAtom
} from '../state/jotai';

// Utils
import { spaceCards } from '../utils/spaceCards';

const StartScreen = () => {
    const setCurrentScreen = useSetAtom( currentScreenAtom );
    const setCurrentDeck = useSetAtom( currentDeckAtom );
    const [ gamePlayersNumber, setGamePlayersNumber ] = useAtom( gamePlayersNumberAtom );

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
                <Stack
                    gap='6rem'
                    alignItems='center'
                >
                    <Typography
                        level='title-lg'
                        fontStyle='italic'
                        textAlign='center'
                    >
                        Choose your number of players then click to get started!
                    </Typography>
                    <RadioGroup
                        value={ gamePlayersNumber }
                        onChange={ e => setGamePlayersNumber( Number( e.target.value ) as 1 | 2 ) }
                        orientation='horizontal'
                        sx={ {
                            justifyContent: 'center'
                            , gap: '3rem'
                        } }
                    >
                        <Radio
                            name='1-player'
                            label='1 player'
                            size='lg'
                            value={ 1 }
                        />
                        <Radio
                            name='2-player'
                            label='2 players'
                            size='lg'
                            value={ 2 }
                        />
                    </RadioGroup>
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
