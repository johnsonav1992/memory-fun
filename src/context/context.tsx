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
};

const MemoryGameContext = createContext<TMemoryGameContext>( initialState );

const MemoryGameContextProvider = ( { children }: PropsWithChildren<unknown> ) => {
    const [ currentScreen, setCurrentScreen ] = useState<TMemoryGameContext['currentScreen']>( 'start-screen' );
    const [ currentDeck, setCurrentDeck ] = useState<TMemoryGameContext['currentDeck']>( [] );
    const [ flippedCards, setFlippedCards ] = useState<TMemoryGameContext['flippedCards']>( [] );

    return (
        <MemoryGameContext.Provider
            value={ {
                currentScreen
                , setCurrentScreen
                , currentDeck
                , setCurrentDeck
                , flippedCards
                , setFlippedCards
            } }
        >
            { children }
        </MemoryGameContext.Provider>
    );
};

export default MemoryGameContextProvider;

export const useMemoryGameContext = () => useContext( MemoryGameContext );
