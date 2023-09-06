// Libraries
import {
    useAtomValue
    , useSetAtom
} from 'jotai';
import { useResetAtom } from 'jotai/utils';

// MUI
import {
    Button
    , Modal
    , ModalDialog
    , Stack
    , Typography
} from '@mui/joy';

// Components
import MemoryCard from '../MemoryCard/MemoryCard';

// Types
import { TMemoryCard } from '../../types/types';

// State
import {
    currentScreenAtom
    , flippedCardsAtom
    , gamePlayersNumberAtom
    , modalOpenAtom
    , useResetGame
} from '../../state/jotai';

interface Props {
    open: boolean;
    matchedCard: TMemoryCard;
    isGameFinished: boolean;
}

const MatchModal = ( {
    matchedCard
    , open
    , isGameFinished
}: Props ) => {
    const resetFlippedCards = useResetAtom( flippedCardsAtom );
    const setModalOpen = useSetAtom( modalOpenAtom );
    const setCurrentScreen = useSetAtom( currentScreenAtom );
    const gamePlayersNumber = useAtomValue( gamePlayersNumberAtom );

    const handleReset = useResetGame();

    const buttonClickHandler = () => {
        if ( isGameFinished ) {
            if ( gamePlayersNumber === 1 ) {
                handleResetGame();
                setCurrentScreen( 'start-screen' );
            } else {
                setCurrentScreen( 'game-over-screen' );
            }
        }
        resetFlippedCards();
        setModalOpen( false );

    };

    const handleResetGame = () => {
        handleReset();
    };

    return (
        <Modal open={ open }>
            <ModalDialog>
                <Stack
                    alignItems='center'
                    gap='1.5rem'
                    m='1rem'
                >
                    <Typography
                        level='h1'
                        color='primary'
                    >
                        { isGameFinished ? 'You finished the game!' : 'You Got a Match!' }
                    </Typography>
                    <MemoryCard
                        card={ matchedCard }
                        width='10rem'
                        thickShadow
                    />
                    <Button
                        sx={ { fontSize: '1rem' } }
                        onClick={ buttonClickHandler }
                    >
                        {
                            isGameFinished
                                ? gamePlayersNumber > 1
                                    ? 'See Scores'
                                    : 'Play Again!'
                                : 'Take Another Turn!'
                        }
                    </Button>
                </Stack>
            </ModalDialog>
        </Modal>
    );
};

export default MatchModal;
