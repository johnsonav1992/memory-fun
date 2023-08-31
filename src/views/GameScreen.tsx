/* eslint-disable no-undef */
import {
    ComponentProps
    , useEffect
    , useRef
} from 'react';

// Libraries
import { shuffle } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import {
    useAtom
    , useAtomValue
    , useSetAtom
} from 'jotai';

// MUI
import {
    Button
    , Card
    , Stack
    , Typography
} from '@mui/joy';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';
import MemoryCard from '../components/MemoryCard/MemoryCard';
import MatchModal from '../components/MatchModal/MatchModal';

// State
import {
    currentDeckAtom
    , currentPlayerAtom
    , currentScreenAtom
    , flippedCardsAtom
    , gamePlayersNumberAtom
    , scoresAtom
} from '../state/jotai';

// Utils
import {
    markPairCompleted
    , setCurrentPlayerColor
} from '../utils/gameUtils';

// Types
import { TMemoryGameState } from '../types/types';

const GameScreen = () => {
    const setCurrentScreen = useSetAtom( currentScreenAtom );
    const [ scores, setScores ] = useAtom( scoresAtom );
    const [ currentPlayer, setCurrentPlayer ] = useAtom( currentPlayerAtom );
    const [ flippedCards, setFlippedCards ] = useAtom( flippedCardsAtom );
    const currentDeck = useAtomValue( currentDeckAtom );
    const gamePlayersNumber = useAtomValue( gamePlayersNumberAtom );

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
    const isGameFinished
        = gamePlayersNumber === 1
            ? currentRoundDeck.current.filter( card => card.cardStatus === 'in-progress' ).length === 2
            : currentRoundDeck.current.every( card => card.cardStatus === 'completed' );

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
            gamePlayersNumber === 2 && incrementPlayerScore();
        } else if ( isNotMatch ) {
            setTimeout( () => {
                switchPlayer();
                setFlippedCards( [] );
            }, 1500 );
        }
    }, [ flippedCards ] );

    const textProps = ( player: TMemoryGameState['currentPlayer'] ): ComponentProps<typeof Typography> => ( {
        level: 'title-lg'
        , sx: setCurrentPlayerColor( player, currentPlayer )
    } );

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
                    {
                        gamePlayersNumber === 2
                            ? (
                                <Stack
                                    direction='row'
                                    justifyContent='space-between'
                                >
                                    <Stack gap='.5rem'>
                                        <Typography { ...textProps( 'player1' ) }>
                                            { 'Player 1:' }
                                        </Typography>
                                        <Typography { ...textProps( 'player1' ) }>
                                            { `${ scores.player1 } match${ es }` }
                                        </Typography>
                                    </Stack>
                                    <Typography level='h4'>
                                        { 'Let\'s Get Matching!' }
                                    </Typography>
                                    <Stack gap='.5rem'>
                                        <Typography { ...textProps( 'player2' ) }>
                                            { 'Player 2:' }
                                        </Typography>
                                        <Typography { ...textProps( 'player2' ) }>
                                            { `${ scores.player2 } match${ _es }` }
                                        </Typography>
                                    </Stack>
                                </Stack>
                            )
                            : (
                                <Typography
                                    level='h3'
                                    color='primary'
                                    textAlign='center'
                                >
                                    Find all the matches!
                                </Typography>
                            )
                    }
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
            <Button
                startDecorator={ <KeyboardReturnIcon /> }
                onClick={ () => setCurrentScreen( 'start-screen' ) }
                sx={ {
                    position: 'fixed'
                    , bottom: '1rem'
                    , right: '1rem'
                } }
            >
                Go To Start Screen
            </Button>
        </BackgroundSheet>
    );
};

export default GameScreen;
