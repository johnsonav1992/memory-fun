// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Context
import { useMemoryGameContext } from '../context/context';

const GameScreen = () => {

    const { currentDeck } = useMemoryGameContext();

    return (
        <BackgroundSheet>
            <Stack
                direction='row'
                justifyContent='center'
                width='100%'
                p='1rem'
                gap='.5rem'
                flexWrap='wrap'
            >
                {
                    currentDeck.map( card => (
                        <MemoryCard
                            key={ card.name }
                            image={ card.path }
                            width='10vw'
                            cardStatus={ card.cardStatus }
                        />
                    ) )
                }
            </Stack>
        </BackgroundSheet>
    );
};

export default GameScreen;
