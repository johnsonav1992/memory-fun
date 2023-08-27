/* eslint-disable no-undef */
import { useRef } from 'react';

// Libraries
import { v4 as uuidv4 } from 'uuid';
import { shuffle } from 'lodash';

// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Context
import { useMemoryGameContext } from '../context/context';

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
