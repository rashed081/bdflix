import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/image2.jpg"
import img2 from "../Images/image1.jpg"
import img3 from "../Images/image4.jpg"
import img4 from "../Images/image3.jpg"
import Card from './Card';
import useScreenWidth from "../hooks/useScreenWidth";
const NewReleased = () => {
    const widthSize = useScreenWidth()
    let control;
    const mobileWidth = 400

    if (widthSize > mobileWidth) {
        control = true;
    }
    if (widthSize <= mobileWidth) {
        control =false;
    }
    return (
        <div className="my-3">
            <div className="d-flex justify-content-between" style={{ fontFamily: "poppins" }}>
                <h3 style={{ fontSize: "18px" }}>New Released Video</h3>
                <h6 style={{ fontSize: "12px" }}>
                    <Link href="/allNewReleasedVideos">
                        <a>View All</a>
                    </Link>
                </h6>
            </div>
            <Carousel indicators={false} controls={control}>
                <Carousel.Item>
                    <Card image={img1}></Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card image={img2}></Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card image={img3}></Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card image={img4}></Card>
                </Carousel.Item>
            </Carousel>
        </div>


    );

}
export default NewReleased;