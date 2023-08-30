// MUI
import {
    SxProps
    , Theme
} from '@mui/joy/styles/types';

// Types
import {
    TMemoryCard
    , TMemoryGameState
} from '../types/types';

export const markPairCompleted = ( deck: TMemoryCard[], flippedCards: TMemoryCard[] ): TMemoryCard[] => {
    return deck.map( card => {
        if ( card.name === flippedCards[ 0 ].name ) {
            return {
                ...card
                , cardStatus: 'completed'
            };
        }
        return card;
    } );
};

export const setCurrentPlayerColor = ( player: TMemoryGameState['currentPlayer'], currentPlayer: TMemoryGameState['currentPlayer'] ): SxProps | undefined => {
    if ( player === currentPlayer ) {
        return {
            color: ( theme: Theme ) => theme.palette.success[ 400 ]
        };
    }
};

export const findWinner = ( scores: TMemoryGameState['scores'] ) => {
    let highestScorer = null;
    let maxValue = -Infinity;
    let score: keyof typeof scores;

    for ( score in scores ) {
        if ( scores[ score ] > maxValue ) {
            maxValue = scores[ score ];
            highestScorer = score;
        }
    }

    switch ( highestScorer ) {
        case 'player1':
            highestScorer = 'Player 1';
            break;
        case 'player2':
            highestScorer = 'Player 2';
            break;
    }

    return highestScorer;
};
