export type ArrayOfLength<T, U extends number> = Array<T> & { length: U }

export type TMemoryGameState = {
    currentScreen: 'start-screen' | 'game-screen' | 'game-over-screen';
    gamePlayersNumber: 1 | 2;
    currentDeck: TMemoryCard[] | [];
    flippedCards: TMemoryCard[];
    scores: Scores;
    currentPlayer: 'player1' | 'player2';
    modalOpen: boolean;
}

export interface CardImage {
    path: `https://memory-game-imgs.s3.us-east-2.amazonaws.com/${ string }.png` | string;
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

export interface CardSet {
    name: string;
    cards: TMemoryCard[];
}
