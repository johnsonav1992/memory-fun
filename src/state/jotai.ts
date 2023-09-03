// Libraries
import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

// Types
import { TMemoryGameState } from '../types/types';

// Utils
import { spaceCards } from '../utils/card-sets/spaceCards';

export const currentScreenAtom = atom<TMemoryGameState['currentScreen']>( 'start-screen' );
export const gamePlayersNumberAtom = atomWithReset<TMemoryGameState['gamePlayersNumber']>( 2 );
export const currentDeckAtom = atom<TMemoryGameState['currentDeck']>( spaceCards );
export const flippedCardsAtom = atomWithReset<TMemoryGameState['flippedCards']>( [] );
export const currentPlayerAtom = atomWithReset<TMemoryGameState['currentPlayer']>( 'player1' );
export const scoresAtom = atomWithReset<TMemoryGameState['scores']>( {
    player1: 0
    , player2: 0
} );

currentDeckAtom.debugLabel = 'currentScreen';
flippedCardsAtom.debugLabel = 'flippedCards';
currentPlayerAtom.debugLabel = 'currentPlayer';
scoresAtom.debugLabel = 'scores';
gamePlayersNumberAtom.debugLabel = 'gamePlayersNumber';
currentScreenAtom.debugLabel = 'currentScreen';
