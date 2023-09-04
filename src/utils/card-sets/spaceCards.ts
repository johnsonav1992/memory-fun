// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import {
    ArrayOfLength
    , TMemoryCard
} from '../../types/types';

export const spaceCards: ArrayOfLength<TMemoryCard, 10> = [
    {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/astro1.png'
        , name: 'astro1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/astro2.png'
        , name: 'astro2'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/earth.png'
        , name: 'earth'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/planet1.png'
        , name: 'planet1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/planet2.png'
        , name: 'planet2'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/rocket1.png'
        , name: 'rocket1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/shuttle.png'
        , name: 'shuttle'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/star.png'
        , name: 'star'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/ufo.png'
        , name: 'ufo'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/alien.png'
        , name: 'alien'
        , cardStatus: 'in-progress'
    }
];
