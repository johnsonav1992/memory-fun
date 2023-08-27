import { useState } from 'react';

// MUI
import {
    Box
    , Card
} from '@mui/joy';

// Components
import Image from '../Image/Image';
import { useMemoryGameContext } from '../../context/context';

// Types
import { TMemoryCard } from '../../types/types';

interface Props {
    width: string;
    card: TMemoryCard;
}

const MemoryCard = ( {
    width
    , card
}: Props ) => {
    const {
        flippedCards
        , setFlippedCards
    } = useMemoryGameContext();

    const [ isCardImageVisible, setIsCardImageVisible ] = useState( false );

    const handleFlipCard = ( newCard: TMemoryCard ) => {
        if ( flippedCards.length === 2 ) return;
        setIsCardImageVisible( currentVis => !currentVis );
        setFlippedCards( currentFlipped => [ ...currentFlipped, newCard ] );
    };

    return (
        <>
            {
                card.cardStatus === 'in-progress'
                    ? (

                        <Card
                            sx={ {
                                width
                                , height: width
                                , p: !isCardImageVisible ? '.2rem' : '.1rem'
                                , '&:hover': {
                                    cursor: 'pointer'
                                }
                            } }
                            onClick={ () => handleFlipCard( card ) }
                        >
                            {
                                isCardImageVisible
                                    ? (
                                        <Image
                                            src={ card.path }
                                            width='100%'
                                            height='100%'
                                        />
                                    )
                                    : (
                                        <Box
                                            width='100%'
                                            height='100%'
                                            sx={ {
                                                backgroundColor: theme => theme.palette.primary[ 300 ]
                                                , borderRadius: 'inherit'
                                            } }
                                        />
                                    )
                            }
                        </Card>
                    )
                    : (
                        <Card
                            sx={ {
                                width
                                , height: width
                                , backgroundColor: 'transparent'
                                , boxShadow: 'none'
                            } }
                        />
                    )
            }
        </>
    );
};

export default MemoryCard;
