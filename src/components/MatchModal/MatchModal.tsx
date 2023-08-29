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

// types
import { TMemoryCard } from '../../types/types';

// State
import { useSetAtom } from 'jotai';
import {
    currentScreenAtom
    , flippedCardsAtom
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
    const setFlippedCards = useSetAtom( flippedCardsAtom );
    const setCurrentScreen = useSetAtom( currentScreenAtom );

    const buttonClickHandler = () => {
        if ( isGameFinished ) {
            setCurrentScreen( 'game-over-screen' );
        }
        setFlippedCards( [] );
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
                        { isGameFinished ? 'See Scores' : 'Take Another Turn!' }
                    </Button>
                </Stack>
            </ModalDialog>
        </Modal>
    );
};

export default MatchModal;
