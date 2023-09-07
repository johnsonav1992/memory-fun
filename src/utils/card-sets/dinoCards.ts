// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import {
    ArrayOfLength
    , TMemoryCard
} from '../../types/types';

export const dinoCards: ArrayOfLength<TMemoryCard, 10> = [
    {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/spinosaurus.png'
        , name: 'spinosaurus'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/stegosaurus.png'
        , name: 'stegosaurus'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/triceratops.png'
        , name: 'triceratops'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/trex.png'
        , name: 'trex'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/pterodactyl.png'
        , name: 'pterodactyl'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/raptor.png'
        , name: 'raptor'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/plesiosaurus.png'
        , name: 'plesiosaurus'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/dino-eggs.png'
        , name: 'dino-eggs'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/dilophosaurus.png'
        , name: 'dilophosaurus'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: 'https://memory-game-imgs.s3.us-east-2.amazonaws.com/brontosaurus.png'
        , name: 'brontosaurus'
        , cardStatus: 'in-progress'
    }
];
