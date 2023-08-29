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
