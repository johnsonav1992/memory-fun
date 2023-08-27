import { useState } from 'react';

// MUI
import {
    Box
    , Card
} from '@mui/joy';

// Components
import Image from '../Image/Image';

interface Props {
    width: string;
    image: string;
    cardStatus: 'in-progress' | 'completed'
}

const MemoryCard = ( {
    width
    , image
    , cardStatus
}: Props ) => {
    const [ isCardImageVisible, setIsCardImageVisible ] = useState( false );

    const handleFlipCard = () => {
        setIsCardImageVisible( currentVis => !currentVis );
    };

    return (
        <>
            {
                cardStatus === 'in-progress'
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
                            onClick={ handleFlipCard }
                        >
                            {
                                isCardImageVisible
                                    ? (
                                        <Image
                                            src={ image }
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
