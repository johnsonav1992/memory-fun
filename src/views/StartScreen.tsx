// MUI
import {
    Button
    , Sheet
    , Stack
    , Typography
} from '@mui/joy';

// Context
import { useMemoryGameContext } from '../context/context';

const StartScreen = () => {
    const { setCurrentScreen } = useMemoryGameContext();

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
            <Stack
                alignItems='center'
                p='1rem'
                gap='3rem'
            >
                <Typography
                    level='h1'
                    fontSize='5rem'
                    color='primary'
                >
                    Memory Fun!
                </Typography>
                <Stack gap='5rem'>
                    <Typography
                        level='title-lg'
                        fontStyle='italic'
                        textAlign='center'
                    >
                        Click to get started!
                    </Typography>
                    <Button
                        variant='solid'
                        color='primary'
                        sx={ {
                            textTransform: 'capitalize'
                            , fontSize: '2rem'
                            , width: '12rem'
                            , height: '5rem'
                        } }
                        onClick={ () => setCurrentScreen( 'game-screen' ) }
                    >
                        { 'Let\'s Go!' }
                    </Button>
                </Stack>
            </Stack>
        </Sheet>
    );
};

export default StartScreen;
