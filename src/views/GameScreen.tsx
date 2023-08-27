// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Assets
import { spaceCards } from '../utils/spaceCards';

const GameScreen = () => {
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
                    spaceCards.map( card => (
                        <MemoryCard
                            key={ card.name }
                            width='10vw'
                            image={ card.path }
                        />
                    ) )
                }
            </Stack>
        </BackgroundSheet>
    );
};

export default GameScreen;
