// Types
import { TMemoryCard } from '../types/types';

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
