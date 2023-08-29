import { PropsWithChildren } from 'react';

// MUI
import { Sheet } from '@mui/joy';

const BackgroundSheet = ( { children }: PropsWithChildren<unknown> ) => {
    return (
        <Sheet
            variant='soft'
            sx={ {
                width: {
                    xs: '100vw'
                    , md: '55vw'
                }
                , height: {
                    xs: '90vh'
                    , md: 'auto'
                }
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
