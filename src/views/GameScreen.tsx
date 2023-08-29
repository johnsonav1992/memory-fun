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
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';
import MatchModal from '../components/MatchModal/MatchModal';

// State
import {
    useAtom
    , useAtomValue
} from 'jotai';
import {
    currentDeckAtom
    , currentPlayerAtom
    , flippedCardsAtom
    , scoresAtom
} from '../state/jotai';

// Utils
import {
    markPairCompleted
    , setCurrentPlayerColor
} from '../utils/gameUtils';

const GameScreen = () => {
    const [ scores, setScores ] = useAtom( scoresAtom );
    const [ currentPlayer, setCurrentPlayer ] = useAtom( currentPlayerAtom );
    const currentDeck = useAtomValue( currentDeckAtom );
    const [ flippedCards, setFlippedCards ] = useAtom( flippedCardsAtom );

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

    const isMatch = flippedCards.length === 2 && flippedCards[ 0 ].name === flippedCards[ 1 ].name;
    const isNotMatch = flippedCards.length === 2 && flippedCards[ 0 ].name !== flippedCards[ 1 ].name;
    const isGameFinished = currentRoundDeck.current.every( card => card.cardStatus === 'completed' );

    const switchPlayer = () => setCurrentPlayer( currentPlayer === 'player1' ? 'player2' : 'player1' );
    const incrementPlayerScore = () => setScores( scores => {
        return {
            ...scores
            , [ currentPlayer ]: scores[ currentPlayer ] + 1
        };
    } );

    useEffect( () => {
        if ( isMatch ) {
            currentRoundDeck.current = markPairCompleted( currentRoundDeck.current, flippedCards );
            incrementPlayerScore();
        } else if ( isNotMatch ) {
            setTimeout( () => {
                switchPlayer();
                setFlippedCards( [] );
            }, 1500 );
        }
    }, [ flippedCards ] );

    const es = scores.player1 !== 1 ? 'es' : '';
    const _es = scores.player2 !== 1 ? 'es' : '';

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
                        <Stack gap='.5rem'>
                            <Typography
                                level='title-lg'
                                sx={ setCurrentPlayerColor( 'player1', currentPlayer ) }
                            >
                                { 'Player 1:' }
                            </Typography>
                            <Typography
                                level='title-lg'
                                sx={ setCurrentPlayerColor( 'player1', currentPlayer ) }
                            >
                                { `${ scores.player1 } match${ es }` }
                            </Typography>
                        </Stack>
                        <Stack gap='.5rem'>
                            <Typography
                                level='title-lg'
                                sx={ setCurrentPlayerColor( 'player2', currentPlayer ) }
                            >
                                { 'Player 2:' }
                            </Typography>
                            <Typography
                                level='title-lg'
                                sx={ setCurrentPlayerColor( 'player2', currentPlayer ) }
                            >
                                { `${ scores.player2 } match${ _es }` }
                            </Typography>
                        </Stack>
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
                isGameFinished={ isGameFinished }
            />
        </BackgroundSheet>
    );
};

export default GameScreen;
