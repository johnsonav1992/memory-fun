// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Assets
import earth from '../assets/earth.png';

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
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
                <MemoryCard
                    width='10vw'
                    image={ earth }
                />
            </Stack>
        </BackgroundSheet>
    );
};

export default GameScreen;
