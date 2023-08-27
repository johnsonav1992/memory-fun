// MUI
import {
    Button
    , Sheet
    , Stack
    , Typography
} from '@mui/joy';

const StartScreen = () => {
    return (
        <Sheet
            variant='soft'
            sx={ {
                width: '60vw'
                , height: '90vh'
                , borderRadius: '1rem'
            } }
        >
            <Stack
                alignItems='center'
                p='1rem'
                gap='2rem'
            >
                <Typography
                    level='h1'
                    fontSize='5rem'
                    color='primary'
                >
                    Memory Fun!
                </Typography>
                <Stack gap='2rem'>
                    <Typography
                        level='title-lg'
                        fontStyle='italic'
                    >
                        Click to get started!
                    </Typography>
                    <Button
                        variant='solid'
                        color='primary'
                        sx={ {
                            textTransform: 'capitalize'
                        } }
                    >
                        { 'Let\'s Go!' }
                    </Button>
                </Stack>
            </Stack>
        </Sheet>
    );
};

export default StartScreen;
