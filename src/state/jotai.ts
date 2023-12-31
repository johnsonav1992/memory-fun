// Libraries
import {
    atomWithReset
    , useResetAtom
} from 'jotai/utils';

// Types
import { TMemoryGameState } from '../types/types';

// Utils
import { spaceCards } from '../utils/card-sets/spaceCards';

export const currentScreenAtom = atomWithReset<TMemoryGameState['currentScreen']>( 'start-screen' );
export const gamePlayersNumberAtom = atomWithReset<TMemoryGameState['gamePlayersNumber']>( 2 );
export const currentDeckAtom = atomWithReset<TMemoryGameState['currentDeck']>( spaceCards );
export const flippedCardsAtom = atomWithReset<TMemoryGameState['flippedCards']>( [] );
export const currentPlayerAtom = atomWithReset<TMemoryGameState['currentPlayer']>( 'player1' );
export const modalOpenAtom = atomWithReset<TMemoryGameState['modalOpen']>( false );
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

export const useResetGame = () => {
    const resetCurrentScreen = useResetAtom( currentScreenAtom );
    const resetGamePlayersNumber = useResetAtom( gamePlayersNumberAtom );
    const resetCurrentDeck = useResetAtom( currentDeckAtom );
    const resetFlippedCards = useResetAtom( flippedCardsAtom );
    const resetCurrentPlayer = useResetAtom( currentPlayerAtom );
    const resetScores = useResetAtom( scoresAtom );
    const resetModalOpen = useResetAtom( modalOpenAtom );

    const handleReset = () => {
        resetCurrentScreen();
        resetGamePlayersNumber();
        resetCurrentDeck();
        resetFlippedCards();
        resetCurrentPlayer();
        resetScores();
        resetModalOpen();
    };

    return handleReset;
};
