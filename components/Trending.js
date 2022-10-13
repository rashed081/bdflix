import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image5.jpg';
import img2 from '../Images/image6.jpg';
import img3 from '../Images/image2.jpg';
import useScreenWidth from "../hooks/useScreenWidth";

const Trending = () => {
    const widthSize = useScreenWidth()
    let control;
    const mobileWidth = 768;

    if (widthSize > mobileWidth) {
        control = true;
    }
    if (widthSize <= mobileWidth) {
        control =false;
    }
    const imgStyle = {
        borderRadius: "11px",
        width: "256px",
        height: "149.28px"
    }
    return (
        <div className="my-3">
            <Carousel indicators={false} controls={control}>
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