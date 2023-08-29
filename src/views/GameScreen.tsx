/* eslint-disable no-undef */
import {
    useEffect
    , useRef
} from 'react';

// Libraries
import { shuffle } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

// MUI
import {
    Card
    , Stack
    , Theme
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';
import MatchModal from '../components/MatchModal/MatchModal';

// Context
import { useMemoryGameContext } from '../context/context';

// Utils
import { markPairCompleted } from '../utils/gameUtils';
import { TMemoryGameContext } from '../types/types';
import { SxProps } from '@mui/joy/styles/types';

const GameScreen = () => {
    const {
        currentDeck
        , flippedCards
        , setFlippedCards
        , scores
        , currentPlayer
        , setCurrentPlayer
    } = useMemoryGameContext();

    const isMatch = flippedCards.length === 2 && flippedCards[ 0 ].name === flippedCards[ 1 ].name;
    const isNotMatch = flippedCards.length === 2 && flippedCards[ 0 ].name !== flippedCards[ 1 ].name;

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
        } else if ( isNotMatch ) {
            setTimeout( () => {
                setCurrentPlayer( currentPlayer === 'player1' ? 'player2' : 'player1' );
                setFlippedCards( [] );
            }, 1500 );
        }
    }, [ flippedCards ] );

    const es = scores.player1 !== 1 ? 'es' : '';
    const _es = scores.player2 !== 1 ? 'es' : '';

    const setCurrentPlayerColor = ( player: TMemoryGameContext['currentPlayer'], currentPlayer: TMemoryGameContext['currentPlayer'] ): SxProps | undefined => {
        if ( player === currentPlayer ) {
            return {
                color: ( theme: Theme ) => theme.palette.success[ 400 ]
            };
        }
    };

    return (
        <BackgroundSheet>
            <Stack
                direction='row'
                justifyContent='center'
                gap='.5rem'
                flexWrap='wrap'
            >
                <Card sx={ { width: '100%' } }>
                    <Stack
                        direction='row'
                        justifyContent='space-between'
                    >
                        <Typography
                            level='title-lg'
                            sx={ setCurrentPlayerColor( 'player1', currentPlayer ) }
                        >
                            { `Player 1:  ${ scores.player1 } match${ es }` }
                        </Typography>
                        <Typography
                            level='title-lg'
                            sx={ setCurrentPlayerColor( 'player2', currentPlayer ) }
                        >
                            { `Player 2:  ${ scores.player2 } match${ _es }` }
                        </Typography>
                    </Stack>
                </Card>
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
