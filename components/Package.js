import Link from "next/link";
import { useState } from "react";

const Package = ({ name, validity, price }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const boxStyle = {
        border: isHover ? '2px solid DodgerBlue' : '2px solid lightgray',
        cursor: 'pointer',
    };
    return (
        <Link href='/packageDetails'>
            <div className="d-flex justify-content-between 
                align-items-center 
                p-3 rounded rounded-3 my-4"
                style={boxStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div>
                    <h5 style={{ fontSize:"13px"}}>{name}</h5>
                    <h5 className="text-secondary" style={{ fontSize:"13px"}}>{validity}</h5>
                </div>
                <h5 style={{ fontSize:"20px"}} >{price}</h5>
            </div>

        </Link>
    );

}
export default Package;