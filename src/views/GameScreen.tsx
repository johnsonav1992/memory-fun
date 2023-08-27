import { useRef } from 'react';

// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Context
import { useMemoryGameContext } from '../context/context';

// Utils
import { shuffle } from 'lodash';

const GameScreen = () => {

    const { currentDeck } = useMemoryGameContext();

    const currentRoundDeck = useRef( shuffle( [ ...currentDeck, ...currentDeck ] ) );

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
                    currentRoundDeck.current.map( card => (
                        <MemoryCard
                            key={ card.name }
                            card={ card }
                            width='10vw'
                        />
                    ) )
                }
            </Stack>
        </BackgroundSheet>
    );
};

export default GameScreen;
