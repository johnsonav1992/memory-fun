import {
    Dispatch
    , SetStateAction
} from 'react';

export type ArrayOfLength<T, U extends number> = Array<T> & { length: U }

export type TMemoryGameContext = {
    currentScreen: 'start-screen' | 'game-screen' | 'game-over-screen';
    setCurrentScreen: Dispatch<SetStateAction<TMemoryGameContext['currentScreen']>>;
    currentDeck: TMemoryCard[];
    setCurrentDeck: Dispatch<SetStateAction<TMemoryGameContext['currentDeck']>>;
    flippedCards: TMemoryCard[];
    setFlippedCards: Dispatch<SetStateAction<TMemoryGameContext['flippedCards']>>;
    scores: Scores;
    setScores: Dispatch<SetStateAction<TMemoryGameContext['scores']>>;
    currentPlayer: 'player1' | 'player2';
    setCurrentPlayer: Dispatch<SetStateAction<TMemoryGameContext['currentPlayer']>>;
}

export interface CardImage {
    path: `/src/assets/${ string }.png` | string;
    name: string;
}

export interface TMemoryCard extends CardImage {
    id: string;
    cardStatus: 'in-progress' | 'completed';
}

export interface Scores {
    player1: number;
    player2: number;
}
