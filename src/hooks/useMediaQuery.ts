import {
    useEffect
    , useState
} from 'react';

type MediaQueryString = `${ string } (${ string }-width ${ string })` | string;

function removeQueryPrefix ( input: MediaQueryString ) {
    return input.replace( '@media ', '' );
}

export const useMediaQuery = ( query: MediaQueryString ): boolean => {
    const getMatches = ( query: MediaQueryString ): boolean => {
        // Prevents SSR issues
        if ( typeof window !== 'undefined' ) {
            return window.matchMedia( removeQueryPrefix( query ) ).matches;
        }
        return false;
    };

    const [ matches, setMatches ] = useState<boolean>( getMatches( query ) );

    const handleChange = () => {
        setMatches( getMatches( query ) );
    };

    useEffect( () => {
        const matchMedia = window.matchMedia( removeQueryPrefix( query ) );

        // Triggered at the first client-side load and if query changes
        handleChange();

        matchMedia.addEventListener( 'change', handleChange );

        return () => {
            matchMedia.removeEventListener( 'change', handleChange );
        };
    }, [ query ] );

    return matches;
};
