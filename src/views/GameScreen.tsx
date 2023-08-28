/* eslint-disable no-undef */
import { useRef } from 'react';

// Libraries
import { shuffle } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

// MUI
import { Stack } from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';

// Context
import { useMemoryGameContext } from '../context/context';

const GameScreen = () => {
    const {
        currentDeck
        , flippedCards
    } = useMemoryGameContext();

    const currentRoundDeck = useRef(
        shuffle(
            [
                ...currentDeck
                , ...currentDeck.map( card => ( {
                    ...card
                    , id: uuidv4()
                } ) )
            ]
        )
    );

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
                            key={ uuidv4() }
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
