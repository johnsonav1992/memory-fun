import { PropsWithChildren } from 'react';

// MUI
import {
    Sheet
    , useTheme
} from '@mui/joy';

// Hooks
import { useMediaQuery } from '../../hooks/useMediaQuery';

const BackgroundSheet = ( { children }: PropsWithChildren<unknown> ) => {
    const theme = useTheme();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Sheet
            variant='soft'
            sx={ {
                width: isMdScreen ? '90%' : '55vw'
                // , height: isMdScreen ? '75%' : undefined
                , p: '.5rem'
                , borderRadius: '1rem'
                , boxShadow: theme => theme.shadow.xl
                , '--joy-shadowOpacity': '.3'
            } }
        >
            { children }
        </Sheet>
    );
};

export default BackgroundSheet;
