import chart from "../Images/Chart.png"
import Image from "next/image";
import Link from "next/link";

const Catagory = ({ title, bg1, bg2 }) => {
    const categoryStyle = {
        width: "157px",
        height: "63px",
        background: `linear-gradient(135deg, ${bg1}, ${bg2})`,
        position: "relative",
        borderRadius:"10px",
        marginRight:"5px",
        cursor:"pointer"
    };
    const textStyle = {
        fontFamily: 'Noto Sans Bengali',
        fontWeight: "bold",
        fontSize: "20",
        position: "absolute",
        left: "17px",
        top: "22px"
    }
    return (
        <Link href="/individualCategory" className="my-3 p-2">
            <div className="mx-auto" style={categoryStyle}>
                <h6 className="text-white"
                    style={textStyle}>{title}</h6>
                <div style={{ position: "absolute", right: "0px", bottom: "-5px" }}>
                    <Image src={chart} />
                </div>
            </div>

        </Link>
    );

}
export default Catagory;