import { Card } from '@mui/joy';
import Image from '../Image/Image';

interface Props {
    width: string;
    image: string;
}

const MemoryCard = ( {
    width
    , image
}: Props ) => {
    return (
        <Card
            sx={ {
                width
                , height: width
            } }
        >
            <Image
                src={ image }
                width='100%'
                height='100%'
            />
        </Card>
    );
};

export default MemoryCard;
