import { PropsWithChildren } from 'react';

// MUI
import { Sheet } from '@mui/joy';

const BackgroundSheet = ( { children }: PropsWithChildren<unknown> ) => {
    return (
        <Sheet
            variant='soft'
            sx={ {
                width: '55vw'
                , height: '55vw'
                , p: '1rem'
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
