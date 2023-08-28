// Libraries
import { v4 as uuidv4 } from 'uuid';

// Types
import {
    ArrayOfLength
    , TMemoryCard
} from '../types/types';

// Assets
import astro1 from '../assets/astro1.png';
import astro2 from '../assets/astro2.png';
import earth from '../assets/earth.png';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';
import rocket1 from '../assets/rocket1.png';
import shuttle from '../assets/shuttle.png';
import star from '../assets/star.png';
import ufo from '../assets/ufo.png';
import alien from '../assets/alien.png';

export const spaceCards: ArrayOfLength<TMemoryCard, 10> = [
    {
        id: uuidv4()
        , path: astro1
        , name: 'astro1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: astro2
        , name: 'astro2'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: earth
        , name: 'earth'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: planet1
        , name: 'planet1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: planet2
        , name: 'planet2'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: rocket1
        , name: 'rocket1'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: shuttle
        , name: 'shuttle'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: star
        , name: 'star'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: ufo
        , name: 'ufo'
        , cardStatus: 'in-progress'
    }
    , {
        id: uuidv4()
        , path: alien
        , name: 'alien'
        , cardStatus: 'in-progress'
    }
];
