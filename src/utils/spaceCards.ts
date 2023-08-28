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

export const spaceCards: ArrayOfLength<TMemoryCard, 9> = [
    {
        path: astro1
        , name: 'astro1'
        , cardStatus: 'in-progress'
    }
    , {
        path: astro2
        , name: 'astro2'
        , cardStatus: 'in-progress'
    }
    , {
        path: earth
        , name: 'earth'
        , cardStatus: 'in-progress'
    }
    , {
        path: planet1
        , name: 'planet1'
        , cardStatus: 'in-progress'
    }
    , {
        path: planet2
        , name: 'planet2'
        , cardStatus: 'in-progress'
    }
    , {
        path: rocket1
        , name: 'rocket1'
        , cardStatus: 'in-progress'
    }
    , {
        path: shuttle
        , name: 'shuttle'
        , cardStatus: 'in-progress'
    }
    , {
        path: star
        , name: 'star'
        , cardStatus: 'in-progress'
    }
    , {
        path: ufo
        , name: 'ufo'
        , cardStatus: 'in-progress'
    }
];
