/* eslint-disable no-undef */
import {
    useEffect
    , useRef
} from 'react';

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
import MatchModal from '../components/MatchModal/MatchModal';
import { markPairCompleted } from '../utils/gameUtils';

const GameScreen = () => {
    const {
        currentDeck
        , flippedCards
    } = useMemoryGameContext();

    const isMatch = flippedCards.length === 2 && flippedCards[ 0 ].name === flippedCards[ 1 ].name;

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

    useEffect( () => {
        if ( isMatch ) {
            currentRoundDeck.current = markPairCompleted( currentRoundDeck.current, flippedCards );
        }
    }, [ flippedCards ] );

    return (
        <BackgroundSheet>
            <Stack
                direction='row'
                justifyContent='center'
                width='100%'
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
            <MatchModal
                open={ isMatch }
                matchedCard={ flippedCards[ 0 ] }
            />
        </BackgroundSheet>
    );
};

export default GameScreen;
