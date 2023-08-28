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

// Context
import { useMemoryGameContext } from '../../context/context';

interface Props {
    open: boolean;
    matchedCard: TMemoryCard;
}

const MatchModal = ( {
    matchedCard
    , open
}: Props ) => {
    const { setFlippedCards } = useMemoryGameContext();

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
                        You Got a Match!
                    </Typography>
                    <MemoryCard
                        card={ matchedCard }
                        width='10rem'
                    />
                    <Button
                        sx={ { fontSize: '1rem' } }
                        onClick={ () => setFlippedCards( [] ) }
                    >
                        Take Another Turn!
                    </Button>
                </Stack>
            </ModalDialog>
        </Modal>
    );
};

export default MatchModal;
