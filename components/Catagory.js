import chart from "../Images/Chart.png"
import Image from "next/image";

const Catagory = ({ title, bg1, bg2 }) => {
    const categoryStyle = {
        width: "167px",
        height: "63px",
        background: `linear-gradient(135deg, ${bg1}, ${bg2})`,
        position: "relative",
        borderRadius:"10px",
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
        <div>
            <div style={categoryStyle}>
                <h6 className="text-white"
                    style={textStyle}>{title}</h6>
                <div style={{ position: "absolute", right: "0px", bottom: "-5px" }}>
                    <Image src={chart} />
                </div>
            </div>

        </div>
    );

}
export default Catagory;