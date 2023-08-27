import {
    Box
    , Card
} from '@mui/joy';
import Image from '../Image/Image';
import { useState } from 'react';

interface Props {
    width: string;
    image: string;
}

const MemoryCard = ( {
    width
    , image
}: Props ) => {
    const [ isCardImageVisible, setIsCardImageVisible ] = useState( false );

    const handleFlipCard = () => {
        setIsCardImageVisible( currentVis => !currentVis );
    };

    return (
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
    );
};

export default MemoryCard;
