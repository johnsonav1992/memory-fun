// Libraries
import {
    useAtom
    , useSetAtom
} from 'jotai';
import {
    RESET
    , useResetAtom
} from 'jotai/utils';

// MUI
import {
    Button
    , Stack
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import Image from '../components/Image/Image';

// Assets
import celeb from '../assets/celeb.png';

// State
import {
    currentPlayerAtom
    , currentScreenAtom
    , flippedCardsAtom
    , gamePlayersNumberAtom
    , scoresAtom
} from '../state/jotai';

// Utils
import { findWinner } from '../utils/gameUtils';

const EndGameScreen = () => {
    const [ scores, setScores ] = useAtom( scoresAtom );
    const resetFlippedCards = useResetAtom( flippedCardsAtom );
    const resetCurrentPlayer = useResetAtom( currentPlayerAtom );
    const resetGamePlayersNumber = useResetAtom( gamePlayersNumberAtom );
    const setCurrentScreen = useSetAtom( currentScreenAtom );

    const winningPlayer = findWinner( scores );

    const handleResetGame = () => {
        setScores( RESET );
        resetFlippedCards();
        resetCurrentPlayer();
        resetGamePlayersNumber();
        setCurrentScreen( 'start-screen' );
    };

    return (
        <BackgroundSheet>
            <Stack
                alignItems='center'
                gap='1rem'
                minHeight='55vh'
            >
                <Typography level='h2'>
                    { `${ winningPlayer } Wins!` }
                </Typography>
                <Image
                    src={ celeb }
                    width={ 200 }
                    height={ 200 }
                    style={ { borderRadius: '1rem' } }
                />
                <Button onClick={ () => handleResetGame() }>
                    Play Again!
                </Button>
            </Stack>
        </BackgroundSheet>
    );
};

export default EndGameScreen;
