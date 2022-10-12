import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image5.jpg';
import img2 from '../Images/image6.jpg';
import img3 from '../Images/image2.jpg';

const Trending = () => {
    const imgStyle = {
        borderRadius: "11px",
        width: "256px",
        height: "149.28px"
    }
    return (
        <div className="my-3">
            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <Image src={img1} style={imgStyle} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img2} style={imgStyle} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img3} style={imgStyle} />
                </Carousel.Item>
            </Carousel>
        </div>


    );
}
export default Trending;