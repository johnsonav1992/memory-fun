// Libraries
import { atom } from 'jotai';

// Types
import { TMemoryGameState } from '../types/types';

// Utils
import { spaceCards } from '../utils/spaceCards';

export const currentScreenAtom = atom<TMemoryGameState['currentScreen']>( 'start-screen' );
export const currentDeckAtom = atom<TMemoryGameState['currentDeck']>( spaceCards );
export const flippedCardsAtom = atom<TMemoryGameState['flippedCards']>( [] );
export const currentPlayerAtom = atom<TMemoryGameState['currentPlayer']>( 'player1' );
export const scoresAtom = atom<TMemoryGameState['scores']>( {
    player1: 0
    , player2: 0
} );
