import { PropsWithChildren } from 'react';

// MUI
import { Sheet } from '@mui/joy';

const BackgroundSheet = ( { children }: PropsWithChildren<unknown> ) => {
    return (
        <Sheet
            variant='soft'
            sx={ {
                width: '55vw'
                , p: '.5rem'
                , pt: '1rem'
                , height: '55vw'
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
