import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
    const [searchDisplay, setSearchDisplay] = useState("block")
    const [inputhDisplay, setInputDisplay] = useState("none")
    const handleOnClick = () => {
        setSearchDisplay("none");
        setInputDisplay("block");
    }
    useEffect(()=>{
        document.addEventListener("mousedown", ()=>{
            setInputDisplay("none");
            setSearchDisplay("block");
        })
    })
    const inputStyle = {
        fontFamily: "poppins",
        fontSize: "12px",
        width: "93%",
        outline: "none"
    }
    return (
        <>
            <div style={{display:searchDisplay}}>
                <div className="d-flex align-items-center justify-content-between py-2" style={{ fontFamily: 'Poppins'}}>
                    <div className=" d-flex align-items-center justify-content-between px-1">
                        <div className="rounded-circle mt-1"
                            style={{ width: "35px", height: "35px", backgroundColor: "#1B3FBC" }}>
                            <p className="text-primary">.</p>
                        </div>
                        <div className="px-2 pt-1"
                            style={{ height: "42px", width: "230px", fontFamily: "poppins" }}>
                            <h6 style={{ fontSize: "18px", marginBottom: "-2px" }}>Hi There !</h6>
                            <p style={{ fontSize: "10px" }}>Subscribe for Premium experience</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            onClick={handleOnClick}
                            icon={faSearch}
                            style={{ fontSize: 20, color: "gray", cursor: "pointer" }}
                        />
                    </div>

                </div>
            </div>

            <div style={{display: inputhDisplay}} className="py-3" >
                <form className='w-100 text-end bg-white rounded-pill '>
                    <div className='d-flex align-items-center mx-2'>
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ fontSize: 12, color: "DodgerBlue", cursor: "pointer" }}
                        />
                        <input type="text"
                            style={inputStyle}
                            className='bg-white rounded-pill py-1 px-2 border-0 text-dark'
                            placeholder='Search.....' />
                        <FontAwesomeIcon
                            icon={faMicrophone}
                            style={{ fontSize: 12, color: "DodgerBlue", cursor: "pointer" }}
                        />
                    </div>

                </form>
            </div>

        </>

    );
}
export default SearchBar;