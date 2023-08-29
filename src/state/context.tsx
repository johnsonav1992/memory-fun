/* eslint-disable @typescript-eslint/no-empty-function */
import {
    PropsWithChildren
    , createContext
    , useContext
    , useState
} from 'react';

// Types
import { TMemoryGameContext } from '../types/types';

const initialState: TMemoryGameContext = {
    currentScreen: 'start-screen'
    , setCurrentScreen: () => {}
    , currentDeck: []
    , setCurrentDeck: () => {}
    , flippedCards: []
    , setFlippedCards: () => {}
    , scores: {
        player1: 0
        , player2: 0
    }
    , setScores: () => {}
    , currentPlayer: 'player1'
    , setCurrentPlayer: () => {}
};

const MemoryGameContext = createContext<TMemoryGameContext>( initialState );

const MemoryGameContextProvider = ( { children }: PropsWithChildren<unknown> ) => {
    const [ currentScreen, setCurrentScreen ] = useState<TMemoryGameContext['currentScreen']>( initialState.currentScreen );
    const [ currentDeck, setCurrentDeck ] = useState<TMemoryGameContext['currentDeck']>( initialState.currentDeck );
    const [ flippedCards, setFlippedCards ] = useState<TMemoryGameContext['flippedCards']>( initialState.flippedCards );
    const [ scores, setScores ] = useState<TMemoryGameContext['scores']>( initialState.scores );
    const [ currentPlayer, setCurrentPlayer ] = useState( initialState.currentPlayer );

    return (
        <MemoryGameContext.Provider
            value={ {
                currentScreen
                , setCurrentScreen
                , currentDeck
                , setCurrentDeck
                , flippedCards
                , setFlippedCards
                , scores
                , setScores
                , currentPlayer
                , setCurrentPlayer
            } }
        >
            { children }
        </MemoryGameContext.Provider>
    );
};

export default MemoryGameContextProvider;

export const useMemoryGameContext = () => useContext( MemoryGameContext );
