import {
    Dispatch
    , SetStateAction
} from 'react';

export type TMemoryGameContext = {
    currentScreen: 'start-screen' | 'game-screen' | 'game-over-screen';
    setCurrentScreen: Dispatch<SetStateAction<TMemoryGameContext['currentScreen']>>;
    currentDeck: MemoryCard[];
    setCurrentDeck: Dispatch<SetStateAction<TMemoryGameContext['currentDeck']>>;
}

export interface CardImage {
    path: `/src/assets/${ string }.png` | string;
    name: string;
}

export interface MemoryCard extends CardImage {
    cardStatus: 'in-progress' | 'completed';
}
