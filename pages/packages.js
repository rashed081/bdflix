import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUnlockKeyhole, faDownload, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import Package from "../components/Package";

const Packages = () => {
    const packages = [
        {
            "id": "1",
            "name": "Mini Packages",
            "validity": "15 Days",
            "price": "29 BDT"
        },
        {
            "id": "2",
            "name": "Standard Packages",
            "validity": "30 Days",
            "price": "39 BDT"
        }
    ];
    return (
        <div style={{fontFamily: "poppins"}}>
            <div className="d-flex">
                <Link href="/" className="nav-item active">
                    <a className="nav-link">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize:"17px"}}
                    /></a>
                </Link>
                <h5 className="px-4" style={{ fontSize:"18px"}}>Packages</h5>
            </div>
            <div className="py-4">
                <h5 style={{ fontSize:"17px", fontWeight:"bold"}}>Enjoy Unlimited Music & Videos</h5>
                <div className="my-4" >
                    <div className="d-flex px-1">
                        <FontAwesomeIcon
                            icon={faUnlockKeyhole}
                            style={{ fontSize: 17, color: "#FFB465" }}
                        />
                        <h6 className="px-3" style={{ fontSize:"14px"}}>Unlock premium Natok and dramas</h6>
                    </div>
                    <div className="d-flex px-1">
                        <FontAwesomeIcon
                            icon={faDownload}
                            style={{ fontSize: 17, color: "#039FC3" }}
                        />
                        <h6 className="px-3 " style={{ fontSize:"14px"}}>Unlimited download</h6>
                    </div>
                    <div className="d-flex px-1">
                        <FontAwesomeIcon
                            icon={faHighlighter}
                            style={{ fontSize: 17, color: "#875DE3" }}
                        />
                        <h6 className="px-3" style={{ fontSize:"14px"}}>Watch in HD to 4K resolution</h6>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <h6 style={{ fontSize:"17px", fontWeight:"bold"}}>Select Premium Plan</h6>
                    <p style={{ fontSize:"14px"}}>Ad-Free, Unlimited offline Downloads and playlist</p>
                </div>
                <div>
                    {packages.map((pkg) => (
                        <Package
                            key={pkg.id}
                            name={pkg.name}
                            validity={pkg.validity}
                            price={pkg.price}
                        ></Package>
                    ))}
                </div>
            </div>

        </div>

    );
}
export default Packages;