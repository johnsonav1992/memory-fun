export type ArrayOfLength<T, U extends number> = Array<T> & { length: U }

export type TMemoryGameState = {
    currentScreen: 'start-screen' | 'game-screen' | 'game-over-screen';
    gamePlayersNumber: 1 | 2;
    currentDeck: TMemoryCard[];
    flippedCards: TMemoryCard[];
    scores: Scores;
    currentPlayer: 'player1' | 'player2';
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
