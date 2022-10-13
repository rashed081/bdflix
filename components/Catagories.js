import Link from "next/link";
import Catagory from "./Catagory";
import Carousel from 'react-bootstrap/Carousel';
import useScreenWidth from "../hooks/useScreenWidth";


const Catagories = () => {
    const widthSize = useScreenWidth()
    let control;
    const mobileWidth = 768;

    if (widthSize > mobileWidth) {
        control = true;
    }
    if (widthSize <= mobileWidth) {
        control =false;
    }
    const categories = [
        {
            "id": "1",
            "title": "জীবনী",
            "bg1": "#868CFF 0%",
            "bg2": "#4318FF 100%",

        },
        {
            "id": "2",
            "title": "গজল",
            "bg1": "#3EA72B 0%",
            "bg2": "#C2F0BA 100%"
        },
        {
            "id": "3",
            "title": "গান",
            "bg1": "#B79FD5 0%",
            "bg2": "#362337 95.31%"
        },
        {
            "id": "4",
            "title": "ভিডিও",
            "bg1": "#00B9E7 0%",
            "bg2": "#1B3FBC 95.31%"
        },
    ];
    return (
        <div className="my-3">
            <div className="d-flex justify-content-between mb-3" style={{ fontFamily: "poppins" }}>
                <h3 style={{ fontSize: "18px" }}>Explore Catagory</h3>
                <h6 style={{ fontSize: "12px" }}>
                    <Link href="/allCatagories">
                        <a>View All</a>
                    </Link>
                </h6>
            </div>

            <div>
                <Carousel indicators={false} controls={control} >
                    <Carousel.Item >
                        <div className="d-flex ">
                            <Catagory
                                title={categories[0].title}
                                bg1={categories[0].bg1}
                                bg2={categories[0].bg2}></Catagory>
                            <Catagory
                                title={categories[1].title}
                                bg1={categories[1].bg1}
                                bg2={categories[1].bg2}></Catagory>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="d-flex ">
                            <Catagory
                                title={categories[2].title}
                                bg1={categories[2].bg1}
                                bg2={categories[2].bg2}></Catagory>
                            <Catagory
                                title={categories[3].title}
                                bg1={categories[3].bg1}
                                bg2={categories[3].bg2}></Catagory>
                        </div>


                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );

}
export default Catagories;