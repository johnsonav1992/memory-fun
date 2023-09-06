import {
    useEffect
    , useState
} from 'react';

function removeQueryPrefix ( input: string ) {
    return input.replace( '@media ', '' );
}

export function useMediaQuery ( query: string ): boolean {
    const getMatches = ( query: string ): boolean => {
        // Prevents SSR issues
        if ( typeof window !== 'undefined' ) {
            return window.matchMedia( removeQueryPrefix( query ) ).matches;
        }
        return false;
    };

    const [ matches, setMatches ] = useState<boolean>( getMatches( query ) );

    function handleChange () {
        setMatches( getMatches( query ) );
    }

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
}
