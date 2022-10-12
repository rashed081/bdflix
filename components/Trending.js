import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image14.png';

const Trending = () => {
    return (
        <div>
            <Carousel className="p-2">
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}
export default Trending;