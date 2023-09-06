// Libraries
import { useAtom } from 'jotai';

// MUI
import {
    Box
    , Card
} from '@mui/joy';

// Components
import Image from '../Image/Image';

// Types
import { TMemoryCard } from '../../types/types';

// State
import { flippedCardsAtom } from '../../state/jotai';

interface Props {
    width: string;
    card: TMemoryCard;
    thickShadow?: boolean;
    isMobile?: boolean;
}

const MemoryCard = ( {
    width
    , card
    , thickShadow = false
    , isMobile
}: Props ) => {
    const [ flippedCards, setFlippedCards ] = useAtom( flippedCardsAtom );

    const isCardImageVisible = !!flippedCards.find( flippedCard => flippedCard.id === card.id );

    const handleFlipCard = ( clickedCard: TMemoryCard ) => {
        const isClickedCardAlreadyFlipped = flippedCards.some( card => card.id === clickedCard.id );
        const areMaxCardsFlipped = flippedCards.length === 2;
        const isMatch = flippedCards.length === 1 && flippedCards[ 0 ].name === clickedCard.name && flippedCards[ 0 ].id !== clickedCard.id;

        if ( areMaxCardsFlipped && !isClickedCardAlreadyFlipped ) {
            return;
        }

        if ( isMatch ) {
            return setFlippedCards( currentFlipped => [ ...currentFlipped, clickedCard ] );
        }

        if ( isClickedCardAlreadyFlipped ) {
            setFlippedCards( currentFlipped =>
                currentFlipped.length === 1
                    ? []
                    : currentFlipped.filter( card => card !== clickedCard )
            );
        } else {
            setFlippedCards( currentFlipped => [ ...currentFlipped, clickedCard ] );
        }

    };

    return (
        <>
            {
                card.cardStatus === 'in-progress'
                    ? (
                        <Card
                            sx={ [ {
                                width
                                , aspectRatio: '1/1'
                                , p: !isCardImageVisible ? '.2rem' : '.1rem'
                                , '&:hover': {
                                    cursor: 'pointer'
                                }
                            }
                            , thickShadow && {
                                '--joy-shadowOpacity': '.5'
                                , boxShadow: theme => theme.shadow.lg
                            }
                            ] }
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
