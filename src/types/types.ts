import {
    Dispatch
    , SetStateAction
} from 'react';

export type TMemoryGameContext = {
    currentScreen: 'start-screen' | 'game-screen' | 'game-over-screen';
    setCurrentScreen: Dispatch<SetStateAction<TMemoryGameContext['currentScreen']>>;
}
