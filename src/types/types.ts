import {
    Dispatch
    , SetStateAction
} from 'react';

export type TMemoryGameContext = {
    currentScreen: string;
    setCurrentScreen: Dispatch<SetStateAction<string>>;
}
