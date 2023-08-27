import { PropsWithChildren } from 'react';

// MUI
import { Sheet } from '@mui/joy';

const BackgroundSheet = ( { children }: PropsWithChildren<unknown> ) => {
    return (
        <Sheet
            variant='soft'
            sx={ {
                width: '60vw'
                , height: '90vh'
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
