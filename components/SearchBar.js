import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between my-2" style={{ fontFamily: 'Poppins' }}>
            <div className=" d-flex align-items-center justify-content-between px-1">
                <div className="rounded-circle mt-2"
                    style={{ width: "35px", height: "35px", backgroundColor: "#1B3FBC" }}>
                    <p className="text-primary">.</p>
                </div>
                <div className="px-2"
                    style={{ height: "42px", width: "230px", fontFamily: "poppins" }}>
                    <h6 style={{ fontSize: "18px" }}>Hi There !</h6>
                    <p style={{ fontSize: "10px" }}>Subscribe for Premium experience</p>
                </div>
            </div>
            <div className="px-3">
                <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: 20, color: "gray",cursor:"pointer" }}
                />
            </div>

        </div>
    );
}
export default SearchBar;