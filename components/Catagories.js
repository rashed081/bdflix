import Link from "next/link";
import Catagory from "./Catagory";

const Catagories = () => {
    const categories = [
        {
            "id":"1",
            "title":"জীবনী",
            "bg1":"#868CFF 0%",
            "bg2":"#4318FF 100%",
            
        },
        {
            "id":"2",
            "title":"গজল",
            "bg1":"#3EA72B 0%",
            "bg2":"#C2F0BA 100%"
        },
        {
            "id":"3",
            "title":"গান",
            "bg1":"#B79FD5 0%",
            "bg2":"#362337 95.31%"
        },
        {
            "id":"4",
            "title":"ভিডিও",
            "bg1":"#00B9E7 0%",
            "bg2":"#1B3FBC 95.31%"
        },
    ];
    return (
        <>
            <div className="d-flex justify-content-between" style={{ fontFamily: "poppins" }}>
                <h3 style={{ fontSize: "18px" }}>Explore Catagory</h3>
                <h6 style={{ fontSize: "12px" }}>
                    <Link href="/catagory">
                        <a>View All</a>
                    </Link>
                </h6>
            </div>
            <div>
                {categories.map((catagory) => (
                    <Catagory 
                    key={catagory.id}
                    title={catagory.title}
                    bg1={catagory.bg1}
                    bg2={catagory.bg2}></Catagory>
                ))}
            </div>
            <div>
                {categories.map((catagory) => (
                    <Catagory 
                    key={catagory.id}
                    title={catagory.title}
                    bg1={catagory.bg1}
                    bg2={catagory.bg2}></Catagory>
                ))}
            </div>
        </>
    );

}
export default Catagories;