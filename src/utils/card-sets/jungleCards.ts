// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import {
    ArrayOfLength
    , TMemoryCard
} from '../../types/types';

export const jungleCards: ArrayOfLength<TMemoryCard, 10> = [
    {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/elephant.png'
        , name: 'elephant'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/jaguar.png'
        , name: 'jaguar'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/hippo.png'
        , name: 'hippo'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/zebra.png'
        , name: 'zebra'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/giraffe.png'
        , name: 'giraffe'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/lion.png'
        , name: 'lion'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/monkey.png'
        , name: 'monkey'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/snake.png'
        , name: 'snake'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/tiger.png'
        , name: 'tiger'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/toucan.png'
        , name: 'toucan'
        , cardStatus: 'in-progress'
    }
];
