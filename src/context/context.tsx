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
    currentScreen: ''
    , setCurrentScreen: () => {}
};

const MemoryGameContext = createContext<TMemoryGameContext>( initialState );

const MemoryGameContextProvider = ( { children }: PropsWithChildren<unknown> ) => {
    const [ currentScreen, setCurrentScreen ] = useState<string>( '' );

    return (
        <MemoryGameContext.Provider
            value={ {
                currentScreen
                , setCurrentScreen
            } }
        >
            { children }
        </MemoryGameContext.Provider>
    );
};

export default MemoryGameContextProvider;

export const useMemoryGameContext = () => useContext( MemoryGameContext );
