// Libraries
import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

// Types
import { TMemoryGameState } from '../types/types';

// Utils
import { spaceCards } from '../utils/spaceCards';

export const currentScreenAtom = atom<TMemoryGameState['currentScreen']>( 'start-screen' );
export const currentDeckAtom = atom<TMemoryGameState['currentDeck']>( spaceCards );
export const flippedCardsAtom = atomWithReset<TMemoryGameState['flippedCards']>( [] );
export const currentPlayerAtom = atomWithReset<TMemoryGameState['currentPlayer']>( 'player1' );
export const scoresAtom = atomWithReset<TMemoryGameState['scores']>( {
    player1: 0
    , player2: 0
} );
