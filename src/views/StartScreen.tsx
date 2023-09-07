// Libraries
import {
    useAtom
    , useSetAtom
} from 'jotai';

// MUI
import {
    Button
    , Option
    , Radio
    , RadioGroup
    , Select
    , Stack
    , Typography
} from '@mui/joy';

// Components
import BackgroundSheet from '../components/BackgroundSheet/BackgroundSheet';

// State
import {
    currentDeckAtom
    , currentScreenAtom
    , gamePlayersNumberAtom
} from '../state/jotai';

// Types
import { CardSet } from '../types/types';

// Utils
import { spaceCards } from '../utils/card-sets/spaceCards';
import { jungleCards } from '../utils/card-sets/jungleCards';
import { dinoCards } from '../utils/card-sets/dinoCards';

const StartScreen = () => {
    const setCurrentScreen = useSetAtom( currentScreenAtom );
    const setCurrentDeck = useSetAtom( currentDeckAtom );
    const [ gamePlayersNumber, setGamePlayersNumber ] = useAtom( gamePlayersNumberAtom );

    const cardSets: CardSet[] = [
        {
            name: 'Outer Space 🚀'
            , cards: spaceCards
        }
        , {
            name: 'Jungle Animals 🐒'
            , cards: jungleCards
        }
        , {
            name: 'Dino Cards 🦖'
            , cards: dinoCards
        }
    ];

    const handleSelectDeck = ( _e: unknown, value: string | null ) => {
        setCurrentDeck( cardSets.find( set => set.name === value )?.cards || [] );
    };

    const handleStartGame = () => {
        setCurrentScreen( 'game-screen' );
    };

    return (
        <BackgroundSheet>
            <Stack
                alignItems='center'
                p='1rem'
                gap='3rem'
            >
                <Typography
                    level='h1'
                    fontSize='5rem'
                    color='primary'
                    sx={ {
                        fontSize: {
                            xs: '3rem'
                            , s: '3.5rem'
                            , md: '4rem'
                            , lg: '5rem'
                        }
                    } }
                >
                    Memory Fun!
                </Typography>
                <Stack
                    gap='4rem'
                    alignItems='center'
                >
                    <Stack gap='1rem'>
                        <Typography
                            level='title-lg'
                            fontStyle='italic'
                            textAlign='center'
                        >
                        Choose your number of players:
                        </Typography>
                        <RadioGroup
                            value={ gamePlayersNumber }
                            onChange={ e => setGamePlayersNumber( Number( e.target.value ) as 1 | 2 ) }
                            orientation='horizontal'
                            sx={ {
                                justifyContent: 'center'
                                , gap: '3rem'
                            } }
                        >
                            <Radio
                                name='1-player'
                                label='1 player'
                                size='lg'
                                value={ 1 }
                            />
                            <Radio
                                name='2-player'
                                label='2 players'
                                size='lg'
                                value={ 2 }
                            />
                        </RadioGroup>
                    </Stack>
                    <Stack gap='1rem'>
                        <Typography
                            level='title-lg'
                            fontStyle='italic'
                            textAlign='center'
                        >
                            Choose your card theme:
                        </Typography>
                        <Select
                            sx={ { width: '100%' } }
                            onChange={ handleSelectDeck }
                            defaultValue={ cardSets[ 0 ].name }
                        >
                            { cardSets.map( set => (
                                <Option
                                    key={ set.name }
                                    value={ set.name }
                                >
                                    { set.name }
                                </Option>
                            ) ) }
                        </Select>
                    </Stack>
                    <Button
                        variant='solid'
                        color='primary'
                        sx={ {
                            fontSize: '2rem'
                            , width: '12rem'
                            , height: '5rem'
                            , boxShadow: theme => theme.shadow.md
                            , '--joy-shadowOpacity': '.4'
                            , borderRadius: '.75rem'
                        } }
                        onClick={ handleStartGame }
                    >
                        { 'Let\'s Go!' }
                    </Button>
                </Stack>
            </Stack>
        </BackgroundSheet>
    );
};

export default StartScreen;
