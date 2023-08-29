import { atom } from 'jotai';
import { TMemoryGameState } from '../types/types';
import { spaceCards } from '../utils/spaceCards';

export const currentScreenAtom = atom<TMemoryGameState['currentScreen']>( 'start-screen' );
export const currentDeckAtom = atom<TMemoryGameState['currentDeck']>( spaceCards );
export const flippedCardsAtom = atom<TMemoryGameState['flippedCards']>( [] );
export const scoresAtom = atom<TMemoryGameState['scores']>( {
    player1: 0
    , player2: 0
} );
export const currentPlayerAtom = atom<TMemoryGameState['currentPlayer']>( 'player1' );
